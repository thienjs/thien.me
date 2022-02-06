import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = ({ title }: { title: string }) => {
  const { asPath } = useRouter();

  const paths = asPath.split("/").slice(0, -1);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="breadcrumb"
    >
      <ul className="flex space-x-2 lg:space-x-3 text-xs lg:text-sm xl:text-base font-medium">
        {paths.map((path) => (
          <li className="flex items-center space-x-3" key={path}>
            <Link href={`${path === "" ? "/" : `/${path}`}`}>
              <a className="text-gray-800 capitalize dark:text-snow hover:underline underline-offset-4 decoration-2 transition-all ease-linear decoration-orange dark:decoration-mint">
                {path === "" ? "home" : path}
              </a>
            </Link>
            <div
              aria-hidden="true"
              className="h-2 lg:h-4 w-px rotate-12 rounded-full bg-gray-400 dark:bg-gray-300"
            />
          </li>
        ))}
        <DisabledBreadcrumb title={title} />
      </ul>
    </motion.nav>
  );
};

export default Breadcrumbs;

const DisabledBreadcrumb = ({ title }: { title: string }) => {
  return (
    <li className="flex items-center lg:space-x-3" aria-current="page">
      <span className="text-gray-400 dark:text-gray-500 capitalize">
        {title}
      </span>
    </li>
  );
};