import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import logo from '../img/logo.png';

const tabs = ["Home", "About Project", "Accounts", "Payment", "Reference"];

const Header = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [onScrolled, setOnScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      // Check if user has scrolled to the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight) {
        setSelected("Reference");
        return;
      }

      // Proceed with the existing logic for other sections
      const sectionOffsets = tabs.map((tab) => {
        const element = document.getElementById(tab.toLowerCase());
        if (element) {
          return {
            id: tab,
            offsetTop: element.offsetTop,
            offsetBottom: element.offsetTop + element.offsetHeight,
          };
        }
        return null;
      }).filter(Boolean); // Filter out null values

      let activeTab = tabs[0];
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (
          scrollPosition >= sectionOffsets[i].offsetTop &&
          scrollPosition < sectionOffsets[i].offsetBottom
        ) {
          activeTab = sectionOffsets[i].id;
          break;
        }
      }
      setSelected(activeTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleTabClick = (tab) => {
    setSelected(tab);
    const element = document.getElementById(tab.toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 130) { // Adjust the value to when you want the element to become fixed
      setOnScrolled(true);
    } else {
      setOnScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="w-full fixed md:relative bg-white grid z-[99] md:p-[20px] p-[50px]"
    >
      <div className='fixed md:relative w-full top-0 flex justify-center'>
        <img className='w-[200px]' src={logo} alt='logo'/>
      </div>
      <div className="md:hidden fixed top-4 right-4 bg-indigo-300 p-[2px] z-20">
        <div
          className={`fixed top-4 2xl:top-8 right-4 bg-indigo-600 p-[2px] z-20 ${
            menuOpen ? "rounded-bl-md rounded-tr-md" : "rounded-md"
          }`}
        >
          <Hamburger toggled={menuOpen} toggle={handleToggle} size={28} />
        </div>
        <div
          className="menu grid p-4"
          style={{
            width: menuOpen ? "calc(100vw - 2rem)" : "0",
            height: menuOpen ? "calc(100dvh - 2rem)" : "0",
            overflow: "hidden",
            transition: menuOpen
              ? "width 0.3s ease-in-out, height 0.3s ease"
              : "height 0.3s ease 0.7s, width 0.3s ease 0.7s",
          }}
        >
          <ul className="flex flex-col gap-4">
            {tabs.map((tab, index) => (
              <li
                key={tab}
                className="text-3xl text-left font-mono"
                style={{
                  opacity: menuOpen ? "1" : "0",
                  transition: `opacity 0.3s ease ${
                    menuOpen
                      ? `calc(${index + 1} * 0.15s)`
                      : `calc(${tabs.length + 1 - (index + 1)} * 0.15s)`
                  }`,
                }}
              >
                <a
                  href={`#${tab.toLowerCase()}-anchor`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`w-full md:flex hidden items-center flex-wrap justify-center gap-4 font-mono ${
        onScrolled ? 'w-full fixed p-[20px] top-0 bg-white text-black ease-in duration-300' : ''
      }`}>
        {tabs.map((tab) => (
          <Chip text={tab} selected={selected === tab} tabId={tab} key={tab} />
        ))}
      </div>
    </div>
  );
};

const Chip = ({ text, selected, tabId }) => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const element = document.getElementById(tabId.toLowerCase());
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const anchor = document.getElementById(tabId.toLowerCase() + "-anchor");
    if (anchor) {
      anchor.addEventListener("click", handleSmoothScroll);
      return () => {
        anchor.removeEventListener("click", handleSmoothScroll);
      };
    }
  }, [tabId]);

  return (
    <a id={`${tabId.toLowerCase()}-anchor`} href={`#${tabId.toLowerCase()}`}>
      <span
        className={`${
          selected
            ? "text-slate-500"
            : "hover:text-slate-400"
        } transition-colors px-2.5`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0"
          ></motion.span>
        )}
      </span>
    </a>
  );
};

export default Header;