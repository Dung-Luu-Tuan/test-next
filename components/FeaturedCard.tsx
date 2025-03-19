import Image from 'next/image';
import Link from 'next/link';

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type PromoSectionProps = {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaUrl: string;
  image1: ImageProps;
  image2?: ImageProps;
  image3?: ImageProps;
};

export default function PromoSection({
  title,
  description,
  ctaLabel,
  ctaUrl,
  image1,
  image2,
  image3,
}: PromoSectionProps) {
  const hasMultipleImages = !!image2;

  return (
    <div className="bg-foso-blue rounded-3xl overflow-hidden mb-12 py-12 flex flex-col items-center text-center">
      <div className="flex flex-col relative h-[650px] bg-foso-blue bg-opacity-30 mb-6">
        <div className="flex justify-center">
          <div
            className={`relative ${
              hasMultipleImages ? 'w-[500px] h-[350px]' : 'w-[800px] h-[650px]'
            }`}
          >
            <Image alt={image1.alt} src={image1.src} fill quality={100} style={{ objectFit: 'contain' }}/>
          </div>
        </div>

        {hasMultipleImages && (
          <div className="w-full flex flex-row items-center justify-center gap-2 mt-4 flex-1 px-5">
            <div className="relative flex-1 flex justify-center">
              <Image
                alt={image2.alt}
                src={image2.src}
                width={image2.width || 200}
                height={image2.height || 200}
              />
            </div>
            <div className="relative flex-1 flex flex-col items-center">
              <p className="text-2xl font-bold text-white mb-4">{title}</p>
              {image3 && (
                <Image
                  alt={image3.alt}
                  src={image3.src}
                  width={image3.width || 200}
                  height={image3.height || 200}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {!hasMultipleImages && (
        <>
          <h3 className="text-2xl font-bold text-white p-4">{title}</h3>
          {description && <p className="text-white mb-4">{description}</p>}
        </>
      )}

      <Link
        href={ctaUrl}
        className="w-11/12 border border-white text-white rounded-full py-4 px-6 inline-flex items-center font-bold transition duration-300 hover:bg-white hover:text-foso-blue justify-between"
      >
        {ctaLabel}
        <svg
          className="w-6 h-6 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M7 17L17 7M7 7h10v10"
          />
        </svg>
      </Link>
    </div>
  );
}
