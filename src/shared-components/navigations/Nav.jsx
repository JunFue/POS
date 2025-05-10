import { useState } from "react";
import "../../Styles.css";
import { Link } from "react-router";
// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

export function Nav() {
  return (
    <div className="relative z-50 grid grid-cols-4 text-center rounded-md w-full h-fit">
      <div>
        <FlyoutLink to="/" FlyoutContent={DashCateg}>
          DASHBOARD
        </FlyoutLink>
      </div>
      <div>
        <FlyoutLink to="/cashout" FlyoutContent={CashoutCateg}>
          CASHOUT
        </FlyoutLink>
      </div>
      <div>
        <FlyoutLink to="/inventory" FlyoutContent={InvetoryCateg}>
          INVENTORY
        </FlyoutLink>
      </div>
      <div>
        <FlyoutLink to="/transactions" FlyoutContent={TransactionsCateg}>
          TRANSACTIONS
        </FlyoutLink>
      </div>
    </div>
  );
}

const FlyoutLink = ({ children, to, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <Link to={to} className="relative text-inherit no-underline text-[1.2vw]">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute top-0 -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-emerald-600 transition-transform duration-300 ease-out"
        ></span>
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-8"
          >
            <div className="absolute left-1/2 top-4 w-1/3 aspect-square bg-emerald-900 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute -top-2 w-full h-3"></div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CategoryBox = ({ className }) => {
  return (
    <div
      className={`w-25 h-30 bg-emerald-900 shadow-2xl rounded-2xl ${className}`}
    ></div>
  );
};

// Using the reusable component
const DashCateg = () => <CategoryBox />;
const CashoutCateg = () => <CategoryBox />;
const InvetoryCateg = () => <CategoryBox />;
const TransactionsCateg = () => <CategoryBox />;
