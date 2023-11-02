"use client";

import { GET_SINGLE_PAGE } from "@/gql/queries";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { signOut, useSession } from "next-auth/react";

export default function Single() {
  const { data } = useSuspenseQuery(GET_SINGLE_PAGE);

  // console.log("SINGLE-page:", data);

  const { data: session } = useSession();

  // single page
  return (
    <>
      {data.pages.nodes[0].acfpages.pageVisible === "yes" && (
        <div className="about">
          <picture className="about__image">
            {/* <source srcSet="./img/06.jpg" media="(min-width: 769px)" /> */}
            <img
              src={data.pages.nodes[0].acfpages.image.sourceUrl}
              alt="image"
              width="360"
              height="448"
            />
          </picture>

          <div className="about__text">
            <h2>{data.pages.nodes[0].title}</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: `${data.pages.nodes[0].content}`,
              }}></div>
          </div>
        </div>
      )}

      {session && (
        <>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}

