import React from "react";
import Link from "next/link";
import { getAuthor } from "@/actions/getAuthor";

const SocialPage = async () => {
  const author = await getAuthor();
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        다양한 소셜 플랫폼에서 만나보세요!
      </p>
      <div className="space-y-3">
        <Link
          href={author.instagramLink}
          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">📷</span>
          <div>
            <h3 className="font-medium text-sm">Instagram</h3>
            <p className="text-xs text-gray-500">@phimstudio</p>
          </div>
        </Link>
        <Link
          href={author.naverBlogLink}
          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">🐙</span>
          <div>
            <h3 className="font-medium text-sm">GitHub</h3>
            <p className="text-xs text-gray-500">github.com/phimstudio</p>
          </div>
        </Link>
      </div>
      <div className="pt-4 border-t">
        <p className="text-xs text-gray-500">
          팔로우하고 최신 소식을 받아보세요!
        </p>
      </div>
    </div>
  );
};

export default SocialPage;
