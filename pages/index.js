import Link from "next/link";
import { PortableText } from "@portabletext/react";

const InternalLink = ({ children, value }) => (
  <Link href={`/${value.slug.current}`} prefetch={false}>
    <a>{children}</a>
  </Link>
);

const myPortableTextComponents = {
  marks: {
    internalLink: InternalLink
  }
};

const blocks = [
  {
    _type: "block",
    _key: "first",
    style: "h1",
    children: [{ _type: "span", _key: "h34d", text: "Header!" }]
  },
  {
    _type: "block",
    _key: "second",
    markDefs: [
      { _key: "th3l1nk", _type: "internalLink", slug: { current: "about" } }
    ],
    children: [
      { _type: "span", _key: "a", text: "This one has " },
      {
        _type: "span",
        _key: "b",
        text: "a link to the about page",
        marks: ["th3l1nk"]
      },
      { _type: "span", _key: "c", text: "." }
    ]
  }
];

export default function IndexPage() {
  return (
    <div>
      <p>Hello World. Here is some portable text for ya:</p>

      <PortableText components={myPortableTextComponents} value={blocks} />
    </div>
  );
}
