'use client';
import SectionHeading from '../TextSectionHeading/SectionHeading';
// import Paragraph from '@/components/Paragraph';
import Word from './Word';
// import Character from '@/components/Character';

const paragraph =
  'Villa Trung Nghĩa ở Đà Lạt cung cấp hơn 100 căn biệt thự sang trọng với giá cả hợp lý, view đẹp và vị trí thuận tiện ngay trung tâm thành phố. Các biệt thự mới toanh được trang bị đầy đủ tiện nghi gồm 4-15 phòng ngủ. Không gian rộng rãi với sân vườn, bãi đỗ xe an toàn và khu vực BBQ ngoài trời lý tưởng để tổ chức tiệc. Villa Trung Nghĩa phù hợp cho các nhóm gia đình, bạn bè, trẻ em vui chơi, tổ chức team building, đám cưới, đám hỏi, lễ kỷ niệm, hội nghị... Các dịch vụ bao gồm đưa đón sân bay, thuê xe, dựng tiệc BBQ với hơn 30 món ăn độc đáo, cho thuê âm thanh ánh sáng. Villa Trung Nghĩa được trang bị đầy đủ tiện nghi phù hợp cho các nhóm gia đình, bạn bè, trẻ em vui chơi, tổ chức team building, tiệc nướng BBQ ngoài trời, đám cưới, đám hỏi, lễ kỷ niệm, hội nghị. Ngoài ra, Villa còn cung cấp dịch vụ tổ chức tiệc sinh nhật, lễ kỷ niệm, tiệc nướng BBQ ngoài trời với thực đơn tiệc nướng hấp dẫn lên đến hơn 30 món ăn lạ miệng. Villa Trung Nghĩa cũng cho thuê loa kéo, phục vụ ca hát để sự kiện thêm phần sôi động.';
export default function TextScroll() {
  return (
    <section className='mt-[20dvh]'>
      {/* <div style={{height: "100vh"}}></div>
        <Paragraph paragraph={paragraph}/> */}
      {/* <div style={{ height: '30vh' }}></div> */}
      <SectionHeading> GIỚI THIỆU </SectionHeading>
      <div className='flex h-full w-full items-center justify-center gap-10'>
        <Word paragraph={paragraph} />
        {/* <div className='w-full md:w-1/3'>
          <div className='relative mx-auto aspect-square h-full w-full'>
            <Image
              alt='pizza'
              src='/images/1.jpg'
              // width={500}
              // height={500}
            fill
            />
          </div>
        </div> */}
      </div>
      {/* <div style={{ height: '30vh' }}></div> */}
      {/* <Character paragraph={paragraph} />
        <div style={{height: "100vh"}}></div> */}
    </section>
  );
}
