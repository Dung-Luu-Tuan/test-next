import Image from 'next/image';

const reactions = [
  { label: 'Hữu ích', count: 1, img: '/thumbs-up.png' },
  { label: 'Yêu thích', count: 2, img: '/heart.png' },
  { label: 'Thú vị', count: 0, img: '/star-eyes.png' },
  { label: 'Bất ngờ', count: 1, img: '/surprised.png' },
  { label: 'Nhàm chán', count: 0, img: '/yawn.png' },
  { label: 'Tức giận', count: 0, img: '/angry.png' },
];

export default function FeedbackReaction() {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white text-center">
      <h3 className="font-semibold text-gray-800">Bạn thấy bài viết như thế nào?</h3>
      <p className="text-sm text-gray-500 mt-1 mb-4">4 phản hồi</p>

      <div className="flex justify-center gap-6">
        {reactions.map((reaction, index) => (
          <div key={index} className={`flex flex-col items-center cursor-pointer p-2 ${reaction.count > 0 ? 'border rounded-lg border-green-400' : ''}`}>
            <Image src={reaction.img} alt={reaction.label} width={40} height={40} />
            <span className={`mt-1 font-medium text-sm ${reaction.count > 0 ? 'text-green-500' : 'text-gray-700'}`}>{reaction.count}</span>
            <span className="text-xs text-gray-600">{reaction.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
