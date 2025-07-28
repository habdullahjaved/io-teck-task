// components/Counter.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { increment, decrement } from "@/lib/features/counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded max-w-xs mx-auto mt-10 text-center">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};
