import { HiOutlineOfficeBuilding } from "react-icons/hi";
import {
  HiOutlineCheckBadge,
  HiOutlineUsers,
  HiOutlineWrenchScrewdriver,
  HiOutlineShieldCheck,
  HiOutlineTrophy,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import {
  FaBuilding,
  FaIndustry,
  FaCity,
  FaTowerBroadcast,
} from "react-icons/fa6";

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

export const trustBarClients = [
  { name: "گروه صنعتی پارس", icon: FaIndustry },
  { name: "هلدینگ عمران نوین", icon: FaBuilding },
  { name: "شهرداری تهران", icon: FaCity },
  { name: "شرکت مخابرات", icon: FaTowerBroadcast },
  { name: "بانک مسکن", icon: FaBuilding },
  { name: "پتروشیمی خلیج", icon: FaIndustry },
];

export const trustBarCertifications = [
  {
    icon: HiOutlineShieldCheck,
    title: "ISO 9001:2015",
    subtitle: "مدیریت کیفیت",
  },
  { icon: HiOutlineCheckBadge, title: "ISO 45001", subtitle: "ایمنی و بهداشت" },
  {
    icon: HiOutlineTrophy,
    title: "رتبه ۱ عمرانی",
    subtitle: "از سازمان برنامه",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "عضویت FIDIC",
    subtitle: "استاندارد بین‌المللی",
  },
];
