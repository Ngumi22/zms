"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Toys",
];

const storeCategories = {
  Electronics: ["Smartphones", "Laptops", "Accessories"],
  Clothing: ["Men", "Women", "Kids"],
  Books: ["Fiction", "Non-fiction", "Educational"],
};

const saleItems = [
  "Smartphone X - 30% off",
  "Laptop Y - 25% off",
  "Headphones Z - 40% off",
  "Smartwatch A - 35% off",
  "Camera B - 20% off",
];

const elements = ["About Us", "Contact Us", "Blog", "FAQ"];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <section className="bg-[#232F3E] py-2 px-4 hidden md:block">
      <div className="mx-auto grid grid-flow-col">
        <div className="justify-self-start relative group ">
          <Button
            variant="ghost"
            className="group text-white gap-x-4 uppercase text-md rounded-none"
          >
            <Menu className="h-8 w-8" />
            <span>Browse All Categories</span>
          </Button>
          <div className="absolute left-0 top-full w-[17rem] bg-white shadow-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="w-full justify-start"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="grid grid-flow-col justify-self-start gap-x-12">
          <Button
            variant="link"
            className="text-white uppercase text-md rounded-none"
          >
            <Link href={"/"}>Home</Link>
          </Button>
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("store")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Button
              variant="ghost"
              className="text-white hover:text-black uppercase text-md rounded-none"
            >
              <span>Our Store</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            {activeMenu === "store" && (
              <div className="absolute left-0 top-full w-40 bg-white shadow-md  overflow-hidden z-50">
                {Object.entries(storeCategories).map(([category, items]) => (
                  <div key={category} className="group">
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-none"
                    >
                      {category}
                    </Button>
                    <div className="absolute left-full top-0 w-48 bg-white shadow-md overflow-hidden invisible group-hover:visible">
                      {items.map((item) => (
                        <Button
                          key={item}
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("sale")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Button
              variant="ghost"
              className="text-white hover:text-black uppercase text-md rounded-none"
            >
              Special Sale
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            {activeMenu === "sale" && (
              <div className="absolute left-0 top-full w-56 bg-white shadow-md overflow-hidden z-50">
                {saleItems.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="w-full justify-start rounded-none"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("elements")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Button
              variant="ghost"
              className="text-white hover:text-black uppercase text-md rounded-none"
            >
              <span>Browse pages</span>
              <ChevronDown className="ml-2 h-4 w-4 " />
            </Button>
            {activeMenu === "elements" && (
              <div className="absolute left-0 top-full w-56 bg-white shadow-md overflow-hidden z-50">
                {elements.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="w-full justify-start rounded-none"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
