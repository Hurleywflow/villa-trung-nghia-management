'use client';
// import Paragraph from '@/components/Paragraph';
import Word from './Word';
// import Character from '@/components/Character';

const paragraph =
  'Hệ thống Villa Đà Lạt - Villa Trung Nghĩa với hơn 100 căn villa hiện đại mang đến cho bạn 1001 sự lựa chọn hấp dẫn nhất. \n Villa sang trọng - Giá cả hợp lý - View siêu đẹp - Vị trí toạ lạc ngay trung tâm Đà Lạt.\n - Villa mới toanh, sang trọng đầy đủ trang thiết bị từ : \n 4 phòng ngủ \n 5 phòng ngủ \n 6 phòng ngủ lên tới 15 phòng ngủ \n - View thiên nhiên- đèn nhà lồng! \n - Sân nướng BBQ tiệc ngoài trời! \n - Bãi đậu xe rộng rãi, an toàn ! \n - Được trang bị đầy đủ phù hợp cho nhóm gia đình, bạn bè, trẻ em vui chơi, tổ chức team Building, tổ chức tiệc BBQ ngoài trời, đám cưới, đám hỏi, lễ kỷ niệm, hội nghị,...\n - Dịch vụ đưa đón sân bay, thuê xe tận nơi, thuê xe tham quan du lịch.\n - Ngoài ra còn có dịch vụ setup tiệc sinh nhật, lễ kỷ niệm, tiệc BBQ đốt lửa trại ngoài trời với menu tiệc nướng hấp dẫn lên đến hơn 30 món ăn lạ miệng, đa dạng \n -Dịch vụ cho thuê loa kéo, phục vụ ca hát.';
export default function TextScroll() {
  return (
    <section>
      {/* <div style={{height: "100vh"}}></div>
        <Paragraph paragraph={paragraph}/> */}
      {/* <div style={{ height: '30vh' }}></div> */}
      <h1 className='mb-20 text-6xl'>Introduction</h1>
      <div className='flex h-full w-full items-center justify-center gap-10'>
        <Word paragraph={paragraph} />
        {/* <div className='w-full md:w-1/3'>
          <div className='relative mx-auto aspect-square h-full w-full'>
            <Image
              alt='pizza'
              src='/images/1.jpg'
              // width={500}
              // height={500}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </div> */}
      </div>
      <div style={{ height: '30vh' }}></div>
      {/* <Character paragraph={paragraph} />
        <div style={{height: "100vh"}}></div> */}
    </section>
  );
}
