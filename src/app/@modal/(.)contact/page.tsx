import Modal from "@/components/modal";
import { getAuthor } from "@/actions/getAuthor";

export default async function ContactModal() {
  const author = await getAuthor();

  return (
    <Modal title={`콘택트 - ${author.name}`}>
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          안녕하세요! 연락을 원하시면 아래 정보를 이용해주세요.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">📧</span>
            <span className="text-sm">{author.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">📱</span>
            <span className="text-sm">{author.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🏠</span>
            <span className="text-sm">{author.location}</span>
          </div>
        </div>
        <div className="pt-4 border-t">
          <p className="text-xs text-gray-500">
            프로젝트 문의나 협업 제안은 언제든 환영합니다!
          </p>
        </div>
      </div>
    </Modal>
  );
}
