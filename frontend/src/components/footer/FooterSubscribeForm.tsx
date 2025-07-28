"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations, useLocale } from "next-intl";

import { setEmail, setSubmitted, setError } from "@/lib/features/formSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import clsx from "clsx";

export default function FooterSubscribeForm() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const dispatch = useAppDispatch();
  const { email, submitted, error } = useAppSelector((state) => state.form);

  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { email },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("invalidEmail") || "Invalid email")
        .required(t("requiredEmail") || "Email is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      dispatch(setSubmitted(true));
      dispatch(setError(undefined));
      setServerMessage(null);

      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: values.email }),
        });
        const data = await res.json();
        if (!res.ok) {
          dispatch(setError(data.message || t("serverError")));
        } else {
          setServerMessage(data.message || t("successMessage"));
          resetForm();
          dispatch(setEmail(""));
        }
      } catch (e: any) {
        dispatch(setError(t("networkError")));
      } finally {
        setSubmitting(false);
        dispatch(setSubmitted(false));
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col w-full">
        {/* Input group */}
        <div className="relative w-full">
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            className={clsx(
              "w-full py-2 pr-28 pl-3 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#4b2515]",
              formik.touched.email && formik.errors.email
                ? "border border-red-500"
                : "border border-gray-300"
            )}
            onChange={(e) => {
              formik.handleChange(e);
              dispatch(setEmail(e.target.value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {/* Submit button aligned conditionally */}
          <button
            type="submit"
            disabled={formik.isSubmitting || submitted}
            className={clsx(
              "absolute inset-y-0 px-4 m-1 rounded-md text-white transition",
              isArabic ? "left-0" : "right-0",
              formik.isSubmitting || submitted
                ? "bg-[#4b2515]/50 cursor-not-allowed"
                : "bg-[#4b2515] hover:bg-[#6b3923]"
            )}
          >
            {formik.isSubmitting || submitted
              ? t("submitting")
              : t("subscribe")}
          </button>
        </div>

        {/* Errors and messages */}
        {formik.touched.email && formik.errors.email && (
          <span className="text-red-500 text-sm mt-1">
            {formik.errors.email}
          </span>
        )}

        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}

        {serverMessage && (
          <span className="text-green-600 text-sm mt-1">{serverMessage}</span>
        )}
      </div>
    </form>
  );
}
