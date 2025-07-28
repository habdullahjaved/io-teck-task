export type DropdownLink = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  dropdown?: DropdownLink[];
};
