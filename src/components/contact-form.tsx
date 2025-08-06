"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createEstimate } from "@/actions/createEstimate";
import { getWorks } from "@/actions/getWorks";
import { toast } from "sonner";

// Zod 스키마 정의
const estimateFormSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  phone: z.string().optional(),
  worksType: z.string().min(1, "작업 유형을 선택해주세요."),
  message: z.string().min(1, "문의사항을 입력해주세요."),
});

type EstimateFormValues = z.infer<typeof estimateFormSchema>;

type Work = {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

const ContactForm = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EstimateFormValues>({
    resolver: zodResolver(estimateFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      worksType: "",
      message: "",
    },
  });

  // 작업 유형 목록 가져오기
  useEffect(() => {
    const fetchWorks = async () => {
      setIsLoading(true);
      try {
        const worksData = await getWorks();
        setWorks(worksData);
      } catch (error) {
        console.error("작업 유형을 불러오는데 실패했습니다:", error);
        toast.error("작업 유형을 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const onSubmit = async (values: EstimateFormValues) => {
    setIsSubmitting(true);
    try {
      await createEstimate(values);
      toast.success("견적 문의가 성공적으로 전송되었습니다!");
      form.reset();
    } catch (error) {
      console.error("견적 문의 전송 실패:", error);
      toast.error("견적 문의 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">견적 문의</h1>
        <p className="text-muted-foreground">
          프로젝트에 대한 견적을 문의해보세요.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름 *</FormLabel>
                <FormControl>
                  <Input placeholder="이름을 입력해주세요" {...field} />
                </FormControl>
                <FormDescription>
                  연락드릴 때 사용할 이름을 입력해주세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="010-1234-5678" {...field} />
                </FormControl>
                <FormDescription>
                  빠른 상담을 위한 연락처를 입력해주세요. (선택사항)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="worksType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>작업 유형 *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          isLoading
                            ? "작업 유형을 불러오는 중..."
                            : "작업 유형을 선택해주세요"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {works.map((work) => (
                      <SelectItem key={work._id} value={work._id}>
                        {work.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  필요한 작업 유형을 선택해주세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>문의사항 *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="프로젝트에 대한 자세한 내용을 알려주세요..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  프로젝트의 규모, 기간, 예산 등 자세한 내용을 알려주시면 더
                  정확한 견적을 제공할 수 있습니다.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "전송 중..." : "견적 문의하기"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
