import React from "react";

const SocialPage = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@phimstudio",
      description: "일상과 작업 과정을 공유하는 공간입니다.",
      followers: "2.5K",
      posts: "156",
      url: "https://instagram.com/phimstudio",
      icon: "📷",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "GitHub",
      handle: "github.com/phimstudio",
      description: "오픈소스 프로젝트와 코드를 공유합니다.",
      followers: "892",
      posts: "127 repos",
      url: "https://github.com/phimstudio",
      icon: "🐙",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/phimstudio",
      description: "전문적인 네트워킹과 경력을 공유합니다.",
      followers: "1.2K",
      posts: "84",
      url: "https://linkedin.com/in/phimstudio",
      icon: "💼",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Twitter",
      handle: "@phimstudio",
      description: "기술 트렌드와 생각을 공유하는 공간입니다.",
      followers: "678",
      posts: "342",
      url: "https://twitter.com/phimstudio",
      icon: "🐦",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Dribbble",
      handle: "dribbble.com/phimstudio",
      description: "디자인 작업과 영감을 공유합니다.",
      followers: "1.8K",
      posts: "73 shots",
      url: "https://dribbble.com/phimstudio",
      icon: "🏀",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "YouTube",
      handle: "PhimStudio",
      description: "튜토리얼과 작업 과정을 영상으로 공유합니다.",
      followers: "892",
      posts: "28 videos",
      url: "https://youtube.com/@phimstudio",
      icon: "📺",
      color: "from-red-500 to-red-700",
    },
  ];

  const recentActivity = [
    {
      platform: "Instagram",
      action: "새 포스트 업로드",
      content: "UI 디자인 프로세스 타임랩스",
      time: "2시간 전",
      icon: "📷",
    },
    {
      platform: "GitHub",
      action: "새 저장소 생성",
      content: "react-component-library",
      time: "1일 전",
      icon: "🐙",
    },
    {
      platform: "LinkedIn",
      action: "글 게시",
      content: "웹 접근성의 중요성에 대한 생각",
      time: "3일 전",
      icon: "💼",
    },
    {
      platform: "Twitter",
      action: "트윗",
      content: "Next.js 14의 새로운 기능들이 정말 인상적이다...",
      time: "5일 전",
      icon: "🐦",
    },
  ];

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">소셜</h1>
          <p className="text-gray-600">
            다양한 플랫폼에서 소통하고 있습니다. 팔로우해주세요!
          </p>
        </div>

        {/* 소셜 플랫폼 그리드 */}
        <div className="grid md:grid-cols-2 gap-6">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}
                >
                  {platform.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{platform.name}</h3>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {platform.handle}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {platform.description}
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">
                        {platform.followers}
                      </span>
                      <span className="text-gray-500 ml-1">팔로워</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        {platform.posts}
                      </span>
                      <span className="text-gray-500 ml-1">게시물</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 최근 활동 */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white rounded-lg"
              >
                <span className="text-lg">{activity.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">
                      {activity.platform}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-sm text-gray-800 font-medium">
                    {activity.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
              모든 활동 보기 →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-2">함께 소통해요!</h2>
          <p className="text-gray-600 mb-4">
            프로젝트 아이디어나 협업 제안이 있으시면 언제든 연락주세요.
          </p>
          <div className="flex justify-center gap-3">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              메시지 보내기
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              팔로우하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
