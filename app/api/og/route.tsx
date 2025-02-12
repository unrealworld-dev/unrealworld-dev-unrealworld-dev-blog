import { NextRequest } from "next/server";
import { ImageResponse } from "next/og"

export const runtime = "edge";

const interBold = fetch(new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url))
	.then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
	try {
		const fontBold = await interBold;
		const { searchParams } = req.nextUrl;
		const title = searchParams.get("title")

		if (!title)
			return new Response("No title provied", { status: 500 })

		const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

		return new ImageResponse(<div
			style={{
				display: 'flex',
				height: '100%',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				backgroundImage: 'linear-gradient(to bottom, #344144, #000101)',
				fontSize: 60,
				letterSpacing: -2,
				fontWeight: 700,
				textAlign: 'center',
			}}
			>
			<div
				style={{
					backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
					backgroundClip: 'text',
					color: 'transparent',
				}}
			>
				Blog
			</div>
			<div
				style={{
					backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
					backgroundClip: 'text',
					color: 'transparent',
				}}
			>
				Unreal & VR
			</div>
			<div
				style={{
					backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
					backgroundClip: 'text',
					color: 'transparent',
				}}
			>
				Developer
			</div>
		</div>
		, {
			width: 1200,
			height: 630,
			fonts: [{
				name: "Inter",
				data: fontBold,
				style: "normal",
				weight: 700
			}]
		})
	} catch (error) {
		return new Response("Failed to generate image", { status: 500 });
	}
}