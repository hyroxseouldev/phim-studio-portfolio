import Modal from "@/components/modal";
import { getWorks } from "@/actions/getWorks";

export default async function WorksModal() {
  const works = await getWorks();

  return (
    <Modal title="웍스">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          창작 작업과 아트워크를 소개합니다.
        </p>
        <div className="space-y-3">
          {works.map((work) => (
            <div key={work._id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-sm">{work.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {work.description}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t">
          <p className="text-xs text-gray-500">
            포트폴리오 전체를 보려면 페이지를 방문해주세요.
          </p>
        </div>
      </div>
    </Modal>
  );
}
