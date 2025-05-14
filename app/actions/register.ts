"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// 타입 정의
export interface RegisterFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  program: string;
  varsityExperience: boolean;
  clubExperience: boolean;
  noExperience: boolean;
  parentName: string;
  email: string;
  phone: string;
  emergencyContact: string;
  emergencyPhone: string;
  medicalInfo: string;
  agreeTerms: boolean;
}

// 전달된 데이터를 구글 스프레드시트에 저장하는 서버 액션
export async function saveToGoogleSheet(
  data: RegisterFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // 환경 변수에서 구글 API 인증 정보 가져오기
    const GOOGLE_SERVICE_ACCOUNT_EMAIL =
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    );
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (
      !GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !GOOGLE_PRIVATE_KEY ||
      !GOOGLE_SHEET_ID
    ) {
      throw new Error("구글 API 인증 정보가 설정되지 않았습니다.");
    }

    // JWT 인증 설정
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // 스프레드시트 문서 초기화
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);

    // 스프레드시트 로드
    await doc.loadInfo();

    // 첫 번째 시트 (또는 원하는 시트) 선택
    const sheet = doc.sheetsByIndex[0];

    // 필요한 헤더 정의
    const headers = [
      "registrationId",
      "registrationDate",
      "firstName",
      "lastName",
      "dateOfBirth",
      "gender",
      "program",
      "experience",
      "parentName",
      "email",
      "phone",
      "emergencyContact",
      "emergencyPhone",
      "medicalInfo",
      "agreeTerms",
    ];

    // 가장 단순한 해결책: 시트의 헤더를 직접 설정
    await sheet.setHeaderRow(headers);

    // 경험 데이터를 문자열로 변환
    const experienceString = data.varsityExperience
      ? "Varsity"
      : data.clubExperience
      ? "Club"
      : data.noExperience
      ? "None"
      : "";

    // 등록 ID 생성
    const registrationId = `REG-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    // 새 행 추가를 위한 데이터 준비
    const rowData = {
      registrationId,
      registrationDate: new Date().toISOString(),
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      program: data.program,
      experience: experienceString,
      parentName: data.parentName,
      email: data.email,
      phone: data.phone,
      emergencyContact: data.emergencyContact,
      emergencyPhone: data.emergencyPhone,
      medicalInfo: data.medicalInfo || "None provided",
      agreeTerms: data.agreeTerms ? "Yes" : "No",
    };

    // 행 추가 시도
    await sheet.addRow(rowData);

    return {
      success: true,
      message: "Registration data saved successfully!",
    };
  } catch (error) {
    console.error("스프레드시트 저장 오류:", error);
    console.error("오류 타입:", typeof error);
    if (error instanceof Error) {
      console.error("오류 메시지:", error.message);
      console.error("오류 스택:", error.stack);
    }

    return {
      success: false,
      message:
        "등록 정보 저장 중 오류가 발생했습니다. 나중에 다시 시도해주세요.",
    };
  }
}
