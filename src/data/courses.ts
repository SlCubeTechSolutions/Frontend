export interface Course {
  id: number;
  title: string;
  thumbnail: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  tags: {
    label: string;
    type: 'validity' | 'live' | 'free' | 'feature';
  }[];
  category: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "TCS NQT CRASH COURSE for 2026-2027 NEW PATTERN + Live Classes",
    thumbnail: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 2509,
    newPrice: 1509,
    discount: 39,
    tags: [
      { label: "MULTIPLE VALIDITY", type: "validity" },
      { label: "LIVE CLASS", type: "live" },
      { label: "TESTS", type: "feature" },
      { label: "VIDEOS", type: "feature" }
    ],
    category: "placement"
  },
  {
    id: 2,
    title: "Complete DSA Interview Preparation - Master Data Structures & Algorithms",
    thumbnail: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 3999,
    newPrice: 1999,
    discount: 50,
    tags: [
      { label: "FREE CONTENT", type: "free" },
      { label: "VIDEOS", type: "feature" },
      { label: "FILES", type: "feature" }
    ],
    category: "interview"
  },
  {
    id: 3,
    title: "GATE CSE 2027 Complete Course with Test Series and Doubt Support",
    thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 4999,
    newPrice: 2999,
    discount: 40,
    tags: [
      { label: "LIVE CLASS", type: "live" },
      { label: "TESTS", type: "feature" },
      { label: "VIDEOS", type: "feature" },
      { label: "FILES", type: "feature" }
    ],
    category: "competitive"
  },
  {
    id: 4,
    title: "System Design Interview Masterclass - Low Level & High Level Design",
    thumbnail: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 2999,
    newPrice: 1799,
    discount: 40,
    tags: [
      { label: "MULTIPLE VALIDITY", type: "validity" },
      { label: "VIDEOS", type: "feature" },
      { label: "FILES", type: "feature" }
    ],
    category: "interview"
  },
  {
    id: 5,
    title: "Infosys InfyTQ Complete Preparation 2026 - Programming & Problem Solving",
    thumbnail: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 1999,
    newPrice: 999,
    discount: 50,
    tags: [
      { label: "FREE CONTENT", type: "free" },
      { label: "TESTS", type: "feature" },
      { label: "VIDEOS", type: "feature" }
    ],
    category: "placement"
  },
  {
    id: 6,
    title: "Full Stack Web Development Bootcamp - MERN Stack with Projects",
    thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 5999,
    newPrice: 3499,
    discount: 41,
    tags: [
      { label: "LIVE CLASS", type: "live" },
      { label: "MULTIPLE VALIDITY", type: "validity" },
      { label: "VIDEOS", type: "feature" },
      { label: "FILES", type: "feature" }
    ],
    category: "placement"
  },
  {
    id: 7,
    title: "Aptitude & Reasoning for Placement - Complete Question Bank with Solutions",
    thumbnail: "https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 1499,
    newPrice: 799,
    discount: 46,
    tags: [
      { label: "TESTS", type: "feature" },
      { label: "VIDEOS", type: "feature" },
      { label: "FILES", type: "feature" }
    ],
    category: "placement"
  },
  {
    id: 8,
    title: "CAT 2026 Preparation Course - Quantitative Aptitude, LRDI & VARC",
    thumbnail: "https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 6999,
    newPrice: 4199,
    discount: 40,
    tags: [
      { label: "LIVE CLASS", type: "live" },
      { label: "TESTS", type: "feature" },
      { label: "VIDEOS", type: "feature" }
    ],
    category: "competitive"
  },
  {
    id: 9,
    title: "Behavioral Interview Mastery - HR Round Preparation for Top Companies",
    thumbnail: "https://images.pexels.com/photos/5439457/pexels-photo-5439457.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 999,
    newPrice: 499,
    discount: 50,
    tags: [
      { label: "FREE CONTENT", type: "free" },
      { label: "VIDEOS", type: "feature" }
    ],
    category: "interview"
  },
  {
    id: 10,
    title: "Accenture Coding Assessment Complete Prep - Pattern Based Questions",
    thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 1799,
    newPrice: 899,
    discount: 50,
    tags: [
      { label: "TESTS", type: "feature" },
      { label: "VIDEOS", type: "feature" },
      { label: "FILES", type: "feature" }
    ],
    category: "placement"
  },
  {
    id: 11,
    title: "SSC CGL 2026 Complete Course - All Subjects with Mock Tests",
    thumbnail: "https://images.pexels.com/photos/5553953/pexels-photo-5553953.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 3999,
    newPrice: 2399,
    discount: 40,
    tags: [
      { label: "LIVE CLASS", type: "live" },
      { label: "TESTS", type: "feature" },
      { label: "VIDEOS", type: "feature" }
    ],
    category: "competitive"
  },
  {
    id: 12,
    title: "Python Programming for Beginners - Complete Development Course",
    thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: 2499,
    newPrice: 1299,
    discount: 48,
    tags: [
      { label: "FREE CONTENT", type: "free" },
      { label: "MULTIPLE VALIDITY", type: "validity" },
      { label: "VIDEOS", type: "feature" }
    ],
    category: "placement"
  }
];
