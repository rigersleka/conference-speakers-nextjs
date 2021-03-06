import React from 'react';
import {useRouter} from "next/router";

const Link = ({ children, href }) => {
    const router = useRouter();
    return (
        <a
            href='#'
            onClick={(e) => {
                e.preventDefault();
                // typically you want to use `next/link` for this usecase
                // but this example shows how you can also access the router
                // and use it manually
                router.push(href);
            }}
        >
            {children}
            <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
        </a>
    );
};

export default Link;