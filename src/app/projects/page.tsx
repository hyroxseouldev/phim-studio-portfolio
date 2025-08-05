import React from "react";
import Link from "next/link";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "현대적인 온라인 쇼핑몰 플랫폼으로, 사용자 친화적인 인터페이스와 강력한 관리 시스템을 제공합니다.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "🛒",
      status: "완료",
    },
    {
      id: 2,
      title: "Mobile App Design",
      description:
        "iOS와 Android를 위한 크로스 플랫폼 모바일 앱으로, 직관적인 UI/UX를 구현했습니다.",
      tech: ["React Native", "Figma", "Firebase", "Redux"],
      image: "📱",
      status: "진행중",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "개인 포트폴리오 웹사이트로, 반응형 디자인과 CMS 연동을 통해 동적 콘텐츠를 관리합니다.",
      tech: ["Next.js", "Sanity CMS", "Vercel", "Framer Motion"],
      image: "🌐",
      status: "완료",
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description:
        "데이터 시각화를 위한 대시보드로, 실시간 분석과 인사이트를 제공합니다.",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "📊",
      status: "기획중",
    },
  ];

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">프로젝트</h1>
          <p className="text-gray-600">
            다양한 기술 스택을 활용한 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.image}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        project.status === "완료"
                          ? "bg-green-100 text-green-800"
                          : project.status === "진행중"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  자세히 보기
                </Link>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  ⭐
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            더 많은 프로젝트가 곧 추가될 예정입니다!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
