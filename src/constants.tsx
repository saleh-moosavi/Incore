import {
  HiOutlineLightBulb,
  HiOutlineOfficeBuilding,
  HiOutlineTruck,
} from "react-icons/hi";
import {
  HiOutlineCheckBadge,
  HiOutlineUsers,
  HiOutlineWrenchScrewdriver,
  HiOutlineShieldCheck,
  HiOutlineTrophy,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
  HiOutlinePencilSquare,
  HiOutlineClipboardDocumentCheck,
  HiOutlineHomeModern,
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

export const AboutSummaryFeatures = [
  "تیم مهندسی مجرب و متخصص",
  "استفاده از مصالح استاندارد و باکیفیت",
  "پایبندی به زمان‌بندی پروژه",
  "پشتیبانی و ضمانت پس از اجرا",
];

export const AboutSummaryPillars = [
  {
    icon: HiOutlineBuildingOffice2,
    title: "تجربه اجرایی",
    desc: "بیش از ۲۴۰ پروژه موفق در سراسر کشور",
  },
  {
    icon: HiOutlineLightBulb,
    title: "نوآوری",
    desc: "استفاده از تکنولوژی‌های نوین ساخت",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "تضمین کیفیت",
    desc: "رعایت استانداردهای ISO و FIDIC",
  },
];

export const ServicesData = [
  {
    icon: HiOutlineBuildingOffice2,
    title: "اجرای ساختمان",
    desc: "ساخت انواع سازه‌های مسکونی، تجاری و صنعتی با رعایت کامل استانداردهای مهندسی.",
    to: "/services/construction",
    tags: ["سازه بتنی", "فلزی", "اسکلت"],
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: "بازسازی و نوسازی",
    desc: "احیای بناهای قدیمی و بازسازی کامل با طراحی مدرن و مصالح نوین.",
    to: "/services/renovation",
    tags: ["نوسازی", "مقاوم‌سازی"],
  },
  {
    icon: HiOutlinePencilSquare,
    title: "طراحی و نقشه‌کشی",
    desc: "طراحی معماری و سازه، نقشه‌کشی فنی و مدل‌سازی سه‌بعدی با نرم‌افزارهای روز.",
    to: "/services/design",
    tags: ["BIM", "معماری", "سازه"],
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "مشاوره مهندسی",
    desc: "ارائه مشاوره تخصصی در انتخاب مصالح، برآورد هزینه و مدیریت پروژه.",
    to: "/services/consulting",
    tags: ["برآورد", "مدیریت"],
  },
  {
    icon: HiOutlineHomeModern,
    title: "دکوراسیون داخلی",
    desc: "طراحی و اجرای دکوراسیون داخلی لوکس با تیم حرفه‌ای و مصالح درجه یک.",
    to: "/services/interior",
    tags: ["لوکس", "مدرن"],
  },
  {
    icon: HiOutlineTruck,
    title: "تأمین مصالح",
    desc: "تأمین و توزیع مصالح ساختمانی استاندارد با قیمت رقابتی و ارسال سریع.",
    to: "/services/materials",
    tags: ["مصالح", "توزیع"],
  },
];
