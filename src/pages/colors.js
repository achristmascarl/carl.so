import Head from "next/head";
import Layout from "../components/Layout";
import { c, colors } from "../utils";
import { motion } from "framer-motion";
import CopyIcon from "../components/CopyIcon";

const pageTitle = "carl | colors";
const pageIcon = "🎨";

export default function Colors() {
  return (
    <Layout colors icon={pageIcon}>
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
      <motion.div
        initial="initial"
        animate="enter"
        variants={{
          initial: {
            opacity: 0,
          },
          enter: {
            opacity: 1,
            duration: 0.5,
          },
        }}
      >
        <div
          className={c(
            "max-w-7xl",
            "md:min-h-screen",
            "mx-auto",
            "px-4",
            "sm:px-6",
            "lg:px-8",
          )}
        >
          <div
            className={c(
              "p-5",
              "mx-auto",
              "max-w-2xl",
              "flex",
              "flex-col",
              "justify-center",
              "text-center",
            )}
          >
            <h1>colors</h1>
            <h2>
              Personal color palette generated and named by{" "}
              <a href="https://coolors.co/" target="_blank">
                coolors.co
              </a>
              ; this page is mainly a utility for myself lol
            </h2>
          </div>
          <div
            className={c(
              "p-5",
              "mx-auto",
              "max-w-2xl",
              "flex",
              "flex-col",
              "justify-center",
              "text-center",
            )}
          >
            <div className="z-0 overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Hex</th>
                    <th>RGB</th>
                  </tr>
                </thead>
                <tbody>
                  {colors.map((color) => {
                    return (
                      <tr key={color.hex}>
                        <th className="w-fit bg-gray-50">
                          <div className="avatar flex justify-center">
                            <div
                              className="w-5 h-5 rounded"
                              style={{ backgroundColor: `#${color.hex}` }}
                            />
                          </div>
                        </th>
                        <td className="bg-gray-50">{color.name}</td>
                        <td className="bg-gray-50">
                          <div className="flex flex-row space-x-1 items-center">
                            <CopyIcon content={color.hex} />
                            <div>{color.hex}</div>
                          </div>
                        </td>
                        <td className="bg-gray-50">
                          <div className="flex flex-row space-x-1 items-center">
                            <CopyIcon content={color.rgb} />
                            <div>{color.rgb}</div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
