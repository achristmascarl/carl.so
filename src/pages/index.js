import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { c } from "../utils";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import carlFloral from "../../public/carl-framed-floral-compressed.png";
import carlHair from "../../public/carl-outlined-bg-min.jpg";
import carlDrawn from "../../public/carl-dk-draw-min.jpg";
import gatherlyLegacy from "../../public/gatherly-legacy.jpg";
import gatherly2021 from "../../public/gatherly-2021-min.jpg";
import gatherly2022 from "../../public/gatherly-2022-min.jpg";
import gatherlyPresent from "../../public/gatherly-present-min.jpg";

const pageTitle = "carl | home";
const pageIcon = "🏠";

const tabStyle = (selected) =>
  c(
    "w-full py-2",
    "rounded-md",
    "focus:outline-none",
    selected
      ? "bg-white shadow font-bold"
      : "text-gray-500 hover:bg-white/[0.5] hover:text-gray",
  );

export default function Home() {
  const [pictureIndex, setPictureIndex] = useState(0);
  const [gatherlyIndex, setGatherlyIndex] = useState(3);

  return (
    <Layout home icon={pageIcon}>
      <Head>
        <link
          rel="icon"
          href={
            "data:image/svg+xml," +
            "<svg xmlns=%22http://www.w3.org/2000/svg%22 " +
            "viewBox=%220 0 100 100%22>" +
            `<text y=%22.9em%22 font-size=%2290%22>${pageIcon}</text>` +
            "</svg>"
          }
        />
        <title>{pageTitle}</title>
        <meta name="og:title" content={pageTitle} />
      </Head>
      <div
        className={c(
          "grid",
          "grid-cols-1",
          "md:grid-cols-2",
          "max-w-7xl",
          "mx-auto",
          "px-4",
          "sm:px-6",
          "lg:px-8",
          "md:min-h-screen",
        )}
      >
        <div className={c("md:justify-items-center", "md:relative")}>
          <div
            className={c(
              "p-5",
              "mx-auto",
              "w-full",
              "max-w-sm",
              "flex",
              "flex-col",
              "justify-center",
              "text-center",
              "md:sticky",
              "md:top-0",
              "md:mt-20",
              "md:pt-20",
            )}
          >
            <h1>hi, i&apos;m carl</h1>
            <Tab.Group
              onChange={(index) => {
                setPictureIndex(index);
              }}
            >
              <Tab.List
                className={c(
                  "flex",
                  "p-1",
                  "bg-gray-50",
                  "rounded-md",
                  "mx-3",
                  "shadow-inner",
                  "md:hidden",
                )}
              >
                <Tab className={({ selected }) => tabStyle(selected)}>
                  no hair
                </Tab>
                <Tab className={({ selected }) => tabStyle(selected)}>hair</Tab>
                <Tab className={({ selected }) => tabStyle(selected)}>
                  drawn
                </Tab>
              </Tab.List>
            </Tab.Group>
          </div>
        </div>
        <div
          className={c(
            "p-5",
            "mx-auto",
            "max-w-5xl",
            "md:flex",
            "flex-col",
            "justify-center",
            "hidden",
          )}
        >
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "pb-10",
            )}
          >
            <Image
              className={c("object-contain")}
              src={carlFloral}
              alt="bald floral carl"
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500")}>no hair</p>
          </div>
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "pb-10",
            )}
          >
            <Image
              className={c("object-contain", "rounded-full")}
              src={carlHair}
              alt="carl with hair"
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>hair</p>
          </div>
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "pb-10",
            )}
          >
            <Image
              className={c("object-contain", "rounded-2xl")}
              src={carlDrawn}
              alt="carl with hair"
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>
              drawn by{" "}
              <a
                href="https://www.instagram.com/daisykong__/"
                target="_blank"
                rel="noreferrer noopener"
              >
                @daisykong__
              </a>
            </p>
          </div>
        </div>
        <div
          className={c(
            "p-5",
            "mx-auto",
            "max-w-5xl",
            "flex",
            "flex-col",
            "justify-center",
            "md:hidden",
          )}
        >
          <div className="w-full grow flex flex-col items-center">
            <Image
              className={c(
                "object-contain",
                pictureIndex === 1
                  ? "rounded-full"
                  : pictureIndex === 2
                    ? "rounded-2xl"
                    : "",
              )}
              src={
                pictureIndex === 0
                  ? carlFloral
                  : pictureIndex === 1
                    ? carlHair
                    : pictureIndex === 2
                      ? carlDrawn
                      : carlFloral
              }
              alt="carl"
              placeholder="blur"
            />
            {pictureIndex === 2 && (
              <p className={c("text-lg", "text-gray-500", "pt-2")}>
                drawn by{" "}
                <a
                  href="https://www.instagram.com/daisykong__/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @daisykong__
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
      <div
        className={c(
          "grid",
          "grid-cols-1",
          "md:grid-cols-3",
          "max-w-7xl",
          "mx-auto",
          "px-4",
          "sm:px-6",
          "lg:px-8",
          "md:min-h-screen",
        )}
      >
        <div
          className={c(
            "col-span-2",
            "p-5",
            "mx-auto",
            "max-w-7xl",
            "md:flex",
            "flex-col",
            "justify-center",
            "hidden",
          )}
        >
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "pb-10",
            )}
          >
            <Image
              className={c("object-contain", "rounded-lg", "shadow-lg")}
              src={gatherlyLegacy}
              alt="gatherly legacy"
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>
              How it started
            </p>
          </div>
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "pb-10",
            )}
          >
            <Image
              className={c("object-contain", "rounded-lg", "shadow-lg")}
              src={gatherly2021}
              alt="gatherly in 2021"
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>
              Gatherly in 2021
            </p>
          </div>
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "pb-10",
            )}
          >
            <Image
              className={c("object-contain", "rounded-lg", "shadow-lg")}
              src={gatherly2022}
              alt="gatherly in 2022"
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>
              Gatherly in 2022
            </p>
          </div>
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "pb-10",
            )}
          >
            <Image
              className={c("object-contain", "rounded-lg", "shadow-lg")}
              src={gatherlyPresent}
              alt="gatherly in 2023"
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>
              Gatherly in 2023
            </p>
          </div>
        </div>
        <div className={c("md:justify-items-center", "md:relative")}>
          <div
            className={c(
              "p-5",
              "mx-auto",
              "w-full",
              "max-w-sm",
              "flex",
              "flex-col",
              "justify-center",
              "text-center",
              "md:sticky",
              "md:top-0",
              "md:mt-10",
              "md:pt-20",
            )}
          >
            <h5>What I&apos;m up to</h5>
            <p className={c("pb-3", "text-center")}>
              I founded Gatherly (
              <a href={"https://gatherly.io/"} target="_blank">
                gatherly.io
              </a>
              ) in 2020 with some friends. It was acquired in 2024.
            </p>
            <Tab.Group
              onChange={(index) => {
                setGatherlyIndex(index);
              }}
              defaultIndex={3}
            >
              <Tab.List
                className={c(
                  "flex",
                  "p-1",
                  "bg-gray-50",
                  "rounded-md",
                  "mx-3",
                  "shadow-inner",
                  "md:hidden",
                )}
              >
                <Tab className={({ selected }) => tabStyle(selected)}>
                  legacy
                </Tab>
                <Tab className={({ selected }) => tabStyle(selected)}>2021</Tab>
                <Tab className={({ selected }) => tabStyle(selected)}>2022</Tab>
                <Tab className={({ selected }) => tabStyle(selected)}>2023</Tab>
              </Tab.List>
            </Tab.Group>
          </div>
        </div>
        <div
          className={c(
            "p-5",
            "mx-auto",
            "max-w-5xl",
            "flex",
            "flex-col",
            "justify-center",
            "md:hidden",
          )}
        >
          <div className="w-full grow">
            <Image
              className={c("object-contain", "shadow-lg", "rounded-lg")}
              src={
                gatherlyIndex === 0
                  ? gatherlyLegacy
                  : gatherlyIndex === 1
                    ? gatherly2021
                    : gatherlyIndex === 2
                      ? gatherly2022
                      : gatherlyIndex === 3
                        ? gatherlyPresent
                        : gatherlyPresent
              }
              alt="gatherly"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      {/* POC of horiztonal scrolling, not working yet tho: */}
      {/* <div
          className={c("grid", "grid-cols-1", "max-w-7xl", "mx-auto", "px-5")}
        >
          <div
            className={c(
              "md:justify-items-center",
              "md:relative",
              "text-center",
            )}
          >
            <h5>What I&apos;m up to</h5>
            <p className={c("pb-3", "text-center")}>
              I founded Gatherly (
              <a
                href={
                  "https://gatherly.io/?utm_source=carl-so&" +
                  "utm_medium=text-link&utm_campaign=personal-websites"
                }
                target="_blank"
              >
                gatherly.io
              </a>
              ) along with some friends in 2020.
            </p>
          </div>
        </div>
        <div
          className={c(
            "justify-evenly",
            "overflow-y-auto",
            "overflow-x-hidden",
            "-rotate-90",
            "origin-top-left",
            "translate-y-[500px]",
            "w-[500px]",
            "md:translate-y-[700px]",
            "md:w-[700px]",
            "h-[100vw]",
            "touch-pan-y",
          )}
        >
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "rotate-90",
            )}
          >
            <Image
              className={c("object-contain", "shadow-md")}
              src={"/carl-framed-floral-compressed.png"}
              alt="bald floral carl"
              width={500}
              height={500}
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500")}>no hair</p>
          </div>
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "rotate-90",
            )}
          >
            <Image
              className={c("object-contain", "shadow-md", "rounded-full")}
              src={"/carl-outlined-bg-min.jpg"}
              alt="carl with hair"
              width={500}
              height={500}
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>hair</p>
          </div>
          <div
            className={c(
              "w-full",
              "grow",
              "flex",
              "flex-col",
              "items-center",
              "rotate-90",
            )}
          >
            <Image
              className={c("object-contain", "shadow-md", "rounded-2xl")}
              src={"/carl-dk-draw-min.jpg"}
              alt="carl drawn by daisy kong"
              width={500}
              height={500}
              placeholder="blur"
            />
            <p className={c("text-lg", "text-gray-500", "pt-2")}>
              drawn by @daisykong__
            </p>
          </div>
        </div> */}
    </Layout>
  );
}
