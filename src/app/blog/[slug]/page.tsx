import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Prose from "@/components/Prose";
import { absoluteUrl } from "@/config/site";
import { getPost, posts } from "@/data/posts";
import PostContent from "./PostContent";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Guide not found" };

  return {
    title: post.title.en,
    description: post.description.en,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title.en,
      description: post.description.en,
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.date,
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.en,
    description: post.description.en,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: ["en", "es"],
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Person",
      name: "OscarDev",
      url: "https://github.com/oscarxdev",
    },
    publisher: {
      "@type": "Organization",
      name: "CodeWinOptimizer",
      url: absoluteUrl("/"),
    },
    image: absoluteUrl("/opengraph-image"),
  };

  return (
    <PageShell wide>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <article className="mx-auto max-w-3xl">
        <Prose>
          <PostContent post={post} />
        </Prose>
      </article>
    </PageShell>
  );
}
