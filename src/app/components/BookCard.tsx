/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xEYJu3kJWDf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import { BookRecommendation } from "../interface/book.request.interface"

export default function BookCard(props : BookRecommendation) {

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];
    
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i <= Number(props.rating) ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
        />
      );
    }
    
    return stars;
  };

  return (
    <Card className="w-full max-w-sm p-6 grid gap-6">
      <div className="flex gap-4">
        <Image src="/book-cover-placeholder.png" alt="Book Cover" width={100} height={150} className="rounded-md"/>
        <div className="grid gap-2 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{props.book}</h3>
            <div className="flex items-center gap-1">
            {renderStars()}
            </div>
          </div>
          <div className="text-muted-foreground">{props.author}</div>
          <div className="text-sm">
          {props.description}
          </div>
        </div>
      </div>
    </Card>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}