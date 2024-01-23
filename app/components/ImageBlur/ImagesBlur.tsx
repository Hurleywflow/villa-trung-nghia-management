import Image from 'next/image';

//todo npm i plaiceholder @plaiceholder/next
import { getPlaiceholder } from 'plaiceholder';

const DynamicBlur: React.FC<{ src: string; sizes: string }> = async ({
  src,
  sizes,
}) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className='relative mx-auto aspect-video w-full overflow-hidden'>
      <Image
        src={src}
        alt='image'
        fill
        placeholder='blur'
        sizes={sizes}
        blurDataURL={base64}
      />
    </div>
  );
};
export default DynamicBlur;
