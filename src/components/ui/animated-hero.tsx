"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Canadian", "local", "sustainable", "quality", "homegrown"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleStartSearching = () => {
    const searchCard = document.querySelector('.max-w-2xl.mx-auto.mb-24');
    if (searchCard) {
      const yOffset = -100; // Adjust this value based on your header height
      const y = searchCard.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button variant="outline" size="sm" className="gap-2">
              New Feature! <Scan className="w-4 h-4" /> Barcode Scanner
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tight text-center font-regular">
              <span className="text-gray-900 dark:text-gray-100">Choose</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-red-600 dark:text-red-500"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Support local businesses and strengthen our economy. Our app helps you make informed 
              shopping choices by identifying Canadian-owned products.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              size="lg" 
              className="gap-2" 
              variant="outline"
              onClick={handleLearnMore}
            >
              Learn More <MoveRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              className="gap-2"
              onClick={handleStartSearching}
            >
              Start Searching <Scan className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
