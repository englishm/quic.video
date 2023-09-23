// Import necessary modules
import withMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	// Optionally, add any other Next.js config below
	reactStrictMode: true,
	experimental: {
		mdxRs: true,
	},
}

const mdxConfig = withMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
	},
})

// Export the configuration
export default mdxConfig(nextConfig)
