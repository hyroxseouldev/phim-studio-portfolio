import Modal from "@/components/modal";
import { getProjects } from "@/actions/getProjects";

export default async function ProjectsModal() {
  const projects = await getProjects();

  return (
    <Modal title="프로젝트">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          최근 진행한 주요 프로젝트들을 소개합니다.
        </p>
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project._id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-sm">{project.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
        <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
          <h3 className="font-medium text-sm">Mobile App Design</h3>
          <p className="text-xs text-gray-500 mt-1">
            React Native, Figma, UI/UX
          </p>
        </div>
        <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
          <h3 className="font-medium text-sm">Portfolio Website</h3>
          <p className="text-xs text-gray-500 mt-1">
            Next.js, Sanity CMS, Vercel
          </p>
        </div>
      </div>
      <div className="pt-4 border-t">
        <p className="text-xs text-gray-500">
          더 자세한 내용은 전체 페이지에서 확인하세요.
        </p>
      </div>
    </Modal>
  );
}
