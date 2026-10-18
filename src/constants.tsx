import { HiOutlineOfficeBuilding } from "react-icons/hi";
import {
  HiOutlineCheckBadge,
  HiOutlineUsers,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

export const heroStats = [
  { icon: HiOutlineOfficeBuilding, value: "۲۴۰+", label: "پروژه اجرا شده" },
  { icon: HiOutlineUsers, value: "۱۸۰+", label: "مشتری راضی" },
  { icon: HiOutlineWrenchScrewdriver, value: "۱۵", label: "سال تجربه" },
  { icon: HiOutlineCheckBadge, value: "۹۸٪", label: "رضایت مشتری" },
];

export const navLinks = [
  { to: "/", label: "خانه" },
  { to: "/about", label: "درباره ما" },
  {
    to: "/services",
    label: "خدمات",
    children: [
      { to: "/services/construction", label: "اجرای ساختمان" },
      { to: "/services/renovation", label: "بازسازی و نوسازی" },
      { to: "/services/consulting", label: "مشاوره مهندسی" },
      { to: "/services/design", label: "طراحی و نقشه‌کشی" },
    ],
  },
  { to: "/portfolio", label: "نمونه‌کارها" },
  { to: "/blog", label: "وبلاگ" },
  { to: "/contact", label: "تماس با ما" },
];
