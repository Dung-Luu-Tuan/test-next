import Breadcrumb from '@/components/Breadcrumb';
import FeedbackReaction from '@/components/FeedbackReaction';
import PromoSection from '@/components/PromoSection';
import RelatedPosts from '@/components/RelatedPosts';
import ShareIcons from '@/components/ShareIcons';
import TableOfContents from '@/components/TableOfContents';
import Image from 'next/image';

const breadcrumbItems = [
  { label: 'Trang chủ', href: '/', isLast: false },
  { label: 'Tài nguyên', href: '/resources', isLast: false },
  { label: 'Blog', href: '/blog', isLast: false },
  { label: 'Quản lí sản xuất', href: '/blog', isLast: true },
];

export default function ProductPage() {

  return (
    <main className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className='col-2 mt-14'>
            <ShareIcons />
          </div>
          <div className="gap-6 lg:col-span-6">
            <article>
              <h1 className="text-2xl font-bold mb-4">
                Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <span>Tác giả: FOSO Creator</span>
                <span>•</span>
                <span>Cập nhật vào: 17/11/2022</span>
                <span>•</span>
                <span>10 phút đọc</span>
              </div>

              <Image alt="5s" src="/5s.png" width={1000} height={600} />
              <span className="flex justify-center text-[#667F93] mb-6">
                Quy trình 5s là gì?
              </span>

              <blockquote className="relative bg-gray-50 p-4 rounded-lg mb-6 text-center text-gray-700 italic">
                <span className="text-green-500 text-8xl absolute -top-6 -left-4">
                  “
                </span>
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời
                cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
                nên thành công của quy trình bạn nhé.
              </blockquote>

              <div className="prose prose-lg max-w-none mb-20">
                {/* Section 1 */}
                <h2 className="font-bold text-lg mb-2 text-foso-title-green">
                  1. Quy trình 5S là gì?
                </h2>
                <br />
                <p>
                  Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                  sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh
                  đào Nhật Bản.
                </p>
                <br />
                <p>
                  Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới
                  vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao
                  gồm 5 chữ S dựa trong tiếng Nhật:
                </p>
                <br />
                <ul className="list-disc list-inside marker:text-foso-title-green">
                  <li>
                    <span className="text-foso-title-green font-semibold">
                      Seiri
                    </span>{' '}
                    (Ngăn nắp)
                  </li>
                  <li>
                    <span className="text-foso-title-green font-semibold">
                      Seiso
                    </span>{' '}
                    (Sạch sẽ)
                  </li>
                  <li>
                    <span className="text-foso-title-green font-semibold">
                      Seiton
                    </span>{' '}
                    (Trật tự)
                  </li>
                  <li>
                    <span className="text-foso-title-green font-semibold">
                      Shitsuke
                    </span>{' '}
                    (Kỷ luật)
                  </li>
                  <li>
                    <span className="text-foso-title-green font-semibold">
                      Seiketsu
                    </span>{' '}
                    (Tiêu chuẩn hóa)
                  </li>
                </ul>
                <br />
                {/* Section 2 */}
                <h2 className="font-bold text-lg mb-2 text-foso-title-green">
                  2. Lợi ích quy trình 5S đem lại
                </h2>
                <br />
                <p>
                  Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                  mỗi bước của quy trình với mục đích cải tiến môi trường làm
                  việc của doanh nghiệp.
                </p>
                <br />
                <p>
                  Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                  nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                  logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ
                  dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi
                  cần thiết.
                </p>
                <br />
                <p>
                  Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra
                  thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào
                  tạo nên một văn hóa doanh nghiệp tích cực.
                </p>
                <br />
                <Image
                  alt="why-5s"
                  src="/why-5s.png"
                  width={1000}
                  height={600}
                />
                <span className="flex justify-center text-[#667F93] mb-6">
                  Tại sao doanh nghiệp cần quy trình 5S?
                </span>
                <h2 className="font-bold text-lg text-foso-title-green">
                  3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                </h2>

                <p>
                  Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                  nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng
                  chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây
                  là các lý do vì sao bạn nên lựa chọn quy trình:
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  3.1 Cải thiện rõ nét môi trường làm việc
                </p>
                <p>
                  Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn,
                  gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian
                  làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  3.2 Tiết kiệm thời gian đáng kể
                </p>
                <p>
                  Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                  thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm
                  đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi
                  thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  3.3 Tăng năng suất làm việc
                </p>
                <p>
                  Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần
                  thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng
                  tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu. Giúp
                  tiết kiệm thời gian và tăng năng suất làm việc.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  3.4 Tiết kiệm chi phí
                </p>
                <p>
                  Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí
                  và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể tiết
                  kiệm chi phí và hoàn thiện hiệu quả cho doanh nghiệp của mình.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  3.5 Tăng chất lượng sản phẩm
                </p>
                <p>
                  5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng.
                  Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi
                  sản xuất không mong muốn.
                </p>
                <Image
                  alt="5s-step"
                  src="/5s-step.png"
                  width={1000}
                  height={600}
                />
                <span className="flex justify-center text-[#667F93] mb-6">
                  Quy trình 5s gồm các bước
                </span>

                <h2 className="font-bold text-lg text-foso-title-green">
                  4. Quy trình 5S gồm các bước
                </h2>

                <p>
                  5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                  hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                  gồm năm bước cơ bản sau:
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  4.1 Seiri (Ngăn nắp)
                </p>
                <p>
                  Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn
                  nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần
                  thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và
                  tiết kiệm thời gian.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  4.2 Seiton (Sắp xếp)
                </p>
                <p>
                  Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết
                  bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm
                  kiếm và sử dụng chúng một cách dễ dàng.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  4.3 Seiso (Vệ sinh)
                </p>
                <p>
                  Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
                  trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch
                  sẽ. Vệ sinh sẽ được thực hiện thường xuyên nhằm giữ gìn giảm
                  thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
                  nhân viên.
                </p>

                <br />
                <p className="font-bold text-foso-title-green">
                  4.4 Seiketsu (Tiêu chuẩn hóa)
                </p>
                <p>
                  Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước
                  này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách
                  thức sử dụng các dụng cụ, thiết bị, tài liệu.
                </p>
                <br />
                <p className="font-bold text-foso-title-green">
                  4.5 Shitsuke (Kỷ luật)
                </p>
                <p>
                  Đây được xem là bước cuối cùng trong quy trình. Và bước này
                  đóng vai trò quan trọng trong duy trì tính hiệu quả của quy
                  tắc 5S trong dài hạn. Bước này cũng thể hiện tạo ra một hệ
                  thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong
                  tổ chức tuân thủ và duy trì quy trình.
                </p>
                <br />
                <Image
                  alt="5s-step-2"
                  src="/5s-step-2.png"
                  width={1000}
                  height={600}
                />
                <span className="flex justify-center text-[#667F93] mb-6">
                  Các bước thực hiện quy trình 5s
                </span>
                <h2 className="font-bold text-lg text-foso-title-green">
                  5. Quy trình được thực hiện như sau:
                </h2>

                <p>
                  Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                  nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng
                  chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây
                  là các lý do vì sao bạn nên lựa chọn quy trình:
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  5.1 Giai đoạn chuẩn bị
                </p>
                <p>
                  Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực
                  đúng ra điều hành và quản lý quá trình thực hiện quy trình 5S.
                  Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc
                  5S sẽ hiệu quả hơn.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  5.2 Triển khai rộng rãi
                </p>
                <p>
                  Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
                  trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến
                  thức cũng như cách áp dụng như thế nào vào doanh nghiệp của
                  bạn.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                </p>
                <p>
                  Đây là bước có thể khiến mọi người không hào hứng trong các
                  bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và
                  không khí hào hứng cho từng cá nhân.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">
                  5.4 Sàng lọc, sắp xếp và đánh giá
                </p>
                <p>
                  Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn
                  bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để
                  việc thực hiện sàng lọc và sắp xếp rõ ràng, khoa học hơn, hiệu
                  quả hơn và dễ dàng tìm kiếm sau này.
                </p>

                <br />

                <p className="font-bold text-foso-title-green">5.5 Đánh giá</p>
                <p>
                  Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại
                  quá trình cải tiến và xem xét cần cải tiến phương diện nào hay
                  không trong quá trình thực hiện quy trình 5S.
                </p>
                <h2 className="font-bold text-lg text-foso-title-green">
                  6. Quy trình 5S có giống với Kaizen?
                </h2>

                <p>
                  Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen
                  hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau
                  nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                </p>

                <br />

                <div className="bg-gray-100 border-l-4 border-foso-title-green p-4 text-xl text-[#33404A] italic">
                  <p>
                    Về Kaizen, thì đây được xem là một triết lý cải tiến liên
                    tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay
                    đổi tích cực, mang tính liên tục và bền vững.
                  </p>
                </div>

                <br />

                <div className="bg-gray-100 border-l-4 border-foso-title-green p-4 text-xl text-[#33404A] italic">
                  <p>
                    Còn đối với quy tắc 5S, đây là một phương pháp quản lý và
                    cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch
                    sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm
                    việc.
                  </p>
                  <div />
                </div>
                <br />
                <p>
                  Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và
                  quy tắc này đóng vai trò quan trọng trong việc tạo ra môi
                  trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử
                  dụng làm bước đầu tiên trong quá trình cải tiến liên tục của
                  phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các
                  hoạt động cải tiến tiếp theo.
                </p>
                <br />
                <h2 className="font-bold text-lg text-foso-title-green">
                  7. Đối tượng nào nên áp dụng 5S?
                </h2>
                <p>
                  Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                  rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                  nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                  xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                  doanh nghiệp nhỏ.
                </p>
                <br />
                <p>
                  Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động
                  phức tạp, các trang thiết bị và vật dụng phải được quản lý và
                  sử dụng hiệu quả.
                </p>
                <br />
                <Image
                  alt="5s-factorial"
                  src="/5s-factorial.png"
                  width={1000}
                  height={600}
                />
                <span className="flex justify-center text-[#667F93] mb-6">
                  Các yếu tố tạo nên thành công cho quy trình 5S
                </span>
                <h2 className="font-bold text-lg text-foso-title-green">
                  8. Các yếu tố tạo nên thành công cho quy trình 5S
                </h2>
                <br />

                <p>
                  Và những nhân tố quyết định đến quá trình thành công của quy
                  trình nhằm cải thiện môi trường làm việc của doanh nghiệp đó
                  là từ phía:
                </p>

                <br />

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh
                    nghiệp: Bởi đây yếu tố quan trọng nhất để quyết định doanh
                    nghiệp có áp dụng quy tắc này hay không.
                  </li>
                  <li>
                    Chương trình, kế hoạch thực hiện quy trình: Sau khi phía
                    lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng,
                    kế hoạch thực hiện triển khai 5S.
                  </li>
                  <li>
                    Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp
                    cần huy động và khuyến khích nhân viên tự nguyện thực hiện
                    vì lợi ích chung của tổ chức, của doanh nghiệp.
                  </li>
                </ul>

                <br />

                <p>
                  Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                  cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi
                  bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình.
                  Và với những thông tin bổ ích như trên, FOSO mong rằng phần
                  nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt
                  bậc trong tương lai.
                </p>
              </div>
              <FeedbackReaction />
            </article>
          </div>
          <div className="lg:col-span-4">
            <TableOfContents />
            <div className="mt-8">
              <PromoSection />
            </div>
          </div>
        </div>
        <RelatedPosts />
      </div>
    </main>
  );
}
