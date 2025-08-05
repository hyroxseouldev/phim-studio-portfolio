import React from "react";

const WorksPage = () => {
  const works = [
    {
      id: 1,
      title: "Digital Art Collection",
      category: "Digital Art",
      description: "다양한 디지털 아트 작품들과 일러스트레이션 컬렉션입니다.",
      tools: ["Photoshop", "Illustration", "Procreate"],
      image: "🎨",
      year: "2024",
    },
    {
      id: 2,
      title: "UI/UX Case Studies",
      category: "Design",
      description:
        "사용자 경험을 중심으로 한 인터페이스 디자인 케이스 스터디입니다.",
      tools: ["Figma", "Sketch", "InVision"],
      image: "📱",
      year: "2023",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Branding",
      description: "브랜드 아이덴티티와 로고 디자인 프로젝트 모음입니다.",
      tools: ["Illustrator", "InDesign", "After Effects"],
      image: "🏷️",
      year: "2023",
    },
    {
      id: 4,
      title: "Motion Graphics",
      category: "Animation",
      description: "애니메이션과 모션 그래픽 작업들을 소개합니다.",
      tools: ["After Effects", "Cinema 4D", "Lottie"],
      image: "🎬",
      year: "2024",
    },
    {
      id: 5,
      title: "Photography Series",
      category: "Photography",
      description: "다양한 주제의 사진 시리즈와 포토 프로젝트입니다.",
      tools: ["Lightroom", "Photoshop", "Capture One"],
      image: "📷",
      year: "2023",
    },
    {
      id: 6,
      title: "Web Design Portfolio",
      category: "Web Design",
      description: "반응형 웹사이트 디자인과 사용자 인터페이스 작업들입니다.",
      tools: ["Figma", "Webflow", "Framer"],
      image: "🌐",
      year: "2024",
    },
  ];

  const categories = [
    "전체",
    "Digital Art",
    "Design",
    "Branding",
    "Animation",
    "Photography",
    "Web Design",
  ];

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">웍스</h1>
          <p className="text-gray-600">창작 작업과 아트워크를 소개합니다.</p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* 작품 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* 작품 미리보기 */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                <span className="text-6xl opacity-70">{work.image}</span>
              </div>

              {/* 작품 정보 */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{work.title}</h3>
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {work.category}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{work.year}</span>
                </div>

                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {work.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">
                    사용 도구
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {work.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    자세히 보기
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더 보기 섹션 */}
        <div className="text-center space-y-4">
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg transition-colors">
            더 많은 작품 보기
          </button>
          <p className="text-gray-500 text-sm">
            포트폴리오에서 더 다양한 작품들을 만나보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
