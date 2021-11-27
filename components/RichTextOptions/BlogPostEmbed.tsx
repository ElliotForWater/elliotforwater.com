import Link from 'next/link'
import { formatDateForDateTime, formatDateForDisplay } from '../../helpers/_date'

export default function BlogPostEmbed({ item }) {
  const timeSuffix = item.isTalk ? 'watch time' : 'read'

  return (
    <Link href={`${process.env.NEXT_PUBLIC_BLOG_URL}/posts/${item.slug}`}>
      <a aria-label={`Read ${item.title}`}>
        <span>
          <img
            src={`${item.featuredImage.url}?w=500`}
            alt={item.featuredImage.description}
            height={item.featuredImage.height}
            width={item.featuredImage.width}
          />
        </span>

        <span>
          <div>
            <time dateTime={formatDateForDateTime(item.date)}>{formatDateForDisplay(item.date)}</time>
            {item.updatedDate && (
              <span>
                <span>•</span>
                <p>
                  <time dateTime={formatDateForDateTime(item.updatedDate)}>
                    Updated {formatDateForDisplay(item.updatedDate)}
                  </time>
                </p>
              </span>
            )}
            <span>•</span>
            <span>
              {item.readingTime} min {timeSuffix}
            </span>
          </div>
          <h2>{item.title}</h2>
        </span>
      </a>
    </Link>
  )
}
