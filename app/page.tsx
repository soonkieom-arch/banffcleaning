'use client';

import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Building2,
  Coffee,
  Wind,
  HardHat,
  ArrowRight,
  MessageCircle,
  Download
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <img 
          src="/logo.jpg" 
          alt="BANFF CLEANING" 
          className="h-12 w-auto object-contain rounded-lg shadow-sm" 
        />
        <div className="flex flex-col">
          <span className="font-extrabold text-xl text-[#1E3653] tracking-tight leading-none">
            BANFF CLEANING
          </span>
          <span className="text-[10px] font-semibold text-slate-500 tracking-wider mt-1">
            HOME & CAFE CLEANING
          </span>
        </div>
        </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-[#1E3653] transition-colors">브랜드 소개</a>
            <a href="#services" className="hover:text-[#1E3653] transition-colors">B2B 서비스</a>
            <a href="#process" className="hover:text-[#1E3653] transition-colors">서비스 공정</a>
            <a href="#contact" className="hover:text-[#1E3653] transition-colors">견적 문의</a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#F0F8FA] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8FD3D5]/20 text-[#1E3653] text-xs font-bold mb-6">
            <Sparkles className="w-4 h-4 text-[#1E3653]" /> 프리미엄 B2B 공간 케어 솔루션
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E3653] leading-tight tracking-tight max-w-4xl mx-auto">
            캐나다 밴프의 청정함 그대로,<br />
            <span className="text-[#1E3653] underline decoration-[#8FD3D5] decoration-4 underline-offset-8">
              사업장의 가치와 위생
            </span>을 완성합니다.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            오피스 및 카페·상업공간 전문 딥클리닝 솔루션.<br />
            100% 친환경 약제 사용 및 영업배상책임보험 가입으로 안심 케어를 제공합니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => alert('B2B 회사 소개서 준비 중입니다.')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#1E3653] font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-5 h-5 text-[#1E3653]" /> B2B 제안서 다운로드
            </button>
          </div>
        </div>
      </section>

      {/* 3. Brand Value Section */}
      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E3653]">왜 밴프 클리닝인가?</h2>
            <p className="mt-3 text-slate-500">기업 고객이 믿고 맡길 수 있는 3가지 핵심 철학</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F0F8FA] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[#8FD3D5] text-[#1E3653] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3653] mb-3">Pure Care (청정 케어)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                독성 세제 걱정 없는 100% 친환경 인증 세제와 고온 스팀 케어 시스템으로 깨끗함과 안전을 동시에 제공합니다.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#F0F8FA] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[#1E3653] text-[#8FD3D5] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3653] mb-3">Detail Care (디테일 케어)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                카페/매장 주방 후드 기름때, 천장형 에어컨 완전 분해 세척, 오피스 바닥 코팅까지 전문 팀장이 책임 시공합니다.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#F0F8FA] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[#8FD3D5] text-[#1E3653] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3653] mb-3">Safe Care (안심 보장)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                영업배상책임보험 가입 완료. 작업 전후 비교 리포트와 정기 세금계산서 발행으로 명확하게 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E3653]">공간에 맞춘 전문 케어 솔루션</h2>
            <p className="mt-3 text-slate-500">사업장 환경에 적합한 맞춤형 케어 프로그램을 확인해보세요</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-6 h-6 text-[#1E3653]" />
                <h3 className="text-xl font-bold text-[#1E3653]">카페 & F&B 매장 케어</h3>
              </div>
              <p className="text-slate-600 text-sm mb-6">
                주방 후드 및 덕트 기름때 제거, 바닥 타일 스케일링, 매장 전면 유리 딥클리닝
              </p>
              <div className="relative rounded-xl overflow-hidden bg-slate-100 h-44 flex items-center justify-center border border-slate-200">
                <span className="absolute top-3 left-3 bg-[#8FD3D5] text-[#1E3653] text-xs font-bold px-3 py-1 rounded-full">
                  BANFF CASE STUDY
                </span>
                <span className="text-slate-400 font-medium text-sm">카페 시공 사례 이미지 위치</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-[#1E3653]" />
                <h3 className="text-xl font-bold text-[#1E3653]">오피스 정기 케어</h3>
              </div>
              <p className="text-slate-600 text-sm mb-6">
                사무실 타일 바닥 왁스 코팅, 데스크 및 공용 공간 정기 소독, 쓰레기 분리수거 관리
              </p>
              <div className="relative rounded-xl overflow-hidden bg-slate-100 h-44 flex items-center justify-center border border-slate-200">
                <span className="absolute top-3 left-3 bg-[#8FD3D5] text-[#1E3653] text-xs font-bold px-3 py-1 rounded-full">
                  BANFF CASE STUDY
                </span>
                <span className="text-slate-400 font-medium text-sm">오피스 바닥 코팅 사례 이미지 위치</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-6 h-6 text-[#1E3653]" />
                <h3 className="text-xl font-bold text-[#1E3653]">에어컨 & HVAC 딥클리닝</h3>
              </div>
              <p className="text-slate-600 text-sm mb-6">
                천장형 4Way/1Way 에어컨 완전 분해 고압 세척, 내부 곰팡이 및 악취 완전 제거
              </p>
              <div className="relative rounded-xl overflow-hidden bg-slate-100 h-44 flex items-center justify-center border border-slate-200">
                <span className="absolute top-3 left-3 bg-[#8FD3D5] text-[#1E3653] text-xs font-bold px-3 py-1 rounded-full">
                  BANFF CASE STUDY
                </span>
                <span className="text-slate-400 font-medium text-sm">에어컨 분해 세척 사례 이미지 위치</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <HardHat className="w-6 h-6 text-[#1E3653]" />
                <h3 className="text-xl font-bold text-[#1E3653]">프리미엄 준공 & 입주 케어</h3>
              </div>
              <p className="text-slate-600 text-sm mb-6">
                신규 사업장 오픈 전 준공 분진 제거, 보양지 제거 및 오픈 정밀 종합 방역
              </p>
              <div className="relative rounded-xl overflow-hidden bg-slate-100 h-44 flex items-center justify-center border border-slate-200">
                <span className="absolute top-3 left-3 bg-[#8FD3D5] text-[#1E3653] text-xs font-bold px-3 py-1 rounded-full">
                  BANFF CASE STUDY
                </span>
                <span className="text-slate-400 font-medium text-sm">준공 청소 시공 사례 이미지 위치</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E3653]">체계적인 4단계 서비스 공정</h2>
            <p className="mt-3 text-slate-500">진단부터 사후 관리까지 신속하고 명확하게 진행됩니다</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F0F8FA]">
              <span className="text-2xl font-black text-[#8FD3D5] block mb-2">01</span>
              <h4 className="font-bold text-[#1E3653] mb-1">현장 진단 신청</h4>
              <p className="text-xs text-slate-600">온라인/전화로 부담 없이 무료 방문 진단을 요청합니다.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F0F8FA]">
              <span className="text-2xl font-black text-[#8FD3D5] block mb-2">02</span>
              <h4 className="font-bold text-[#1E3653] mb-1">맞춤 실측 & 견적</h4>
              <p className="text-xs text-slate-600">전문가가 현장 방문 후 맞춤 B2B 제안서와 견적을 제출합니다.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F0F8FA]">
              <span className="text-2xl font-black text-[#8FD3D5] block mb-2">03</span>
              <h4 className="font-bold text-[#1E3653] mb-1">전문 시공 진행</h4>
              <p className="text-xs text-slate-600">기업 스케줄(주말/야간)에 맞추어 전문 팀장이 정밀 시공합니다.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-[#F0F8FA]">
              <span className="text-2xl font-black text-[#8FD3D5] block mb-2">04</span>
              <h4 className="font-bold text-[#1E3653] mb-1">리포트 & 사후 관리</h4>
              <p className="text-xs text-slate-600">Before/After 작업 보고서 발송 및 정기 세금계산서를 발행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Form Section */}
      <section id="contact" className="py-20 bg-[#1E3653] text-white">
        <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">1:1 맞춤 현장 진단 신청</h2>
          <p className="mt-3 text-slate-300">문의 사항을 남겨주시면 담당자가 빠른 시일 내 연락드립니다.</p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert('무료 현장 진단 신청이 접수되었습니다.'); }}
          className="space-y-4 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
        >
        <div>
          <label className="block text-sm font-semibold mb-2 text-center">기업/매장명 *</label>
          <input type="text" required placeholder="예: 밴프 카페 김포점" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#8FD3D5] text-center" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-center">담당자명/직급 *</label>
          <input type="text" required placeholder="예: 홍길동 팀장" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#8FD3D5] text-center" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-center">연락처 *</label>
          <input type="tel" required placeholder="010-0000-0000" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#8FD3D5] text-center" />
        </div>
        </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-center">희망 서비스 선택</label>
        <select className="w-full px-4 py-3 rounded-lg bg-[#1E3653] border border-white/20 text-white focus:outline-none focus:border-[#8FD3D5] text-center">
          <option>카페 & F&B 매장 케어</option>
          <option>오피스 정기 케어</option>
          <option>에어컨 & HVAC 딥클리닝</option>
          <option>프리미엄 준공 & 입주 케어</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-center">문의 및 요청 사항</label>
        <textarea rows={4} placeholder="사업장 평수, 희망 방문 일정 등을 적어주세요." className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#8FD3D5] text-center"></textarea>
      </div>
      <button type="submit" className="w-full py-4 bg-[#8FD3D5] text-[#1E3653] font-bold rounded-lg hover:bg-white transition-colors">
        무료 현장 진단 신청하기
      </button>
      </form>
      </div>
    </section>

      {/* 7. Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-3">
          <p className="font-bold text-slate-200 text-sm">밴프 클리닝 (BANFF HOME & CAFE CLEANING)</p>
          <p>사업장 소재지: 경기도 김포시 | 대표전화: 1588-0000 | 이메일: contact@banffcleaning.com</p>
          <p>© 2026 BANFF CLEANING. All rights reserved.</p>
        </div>
      </footer>

      {/* 8. Floating Messenger Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
         href="https://pf.kakao.com/_KdxgrX/chat"  
         target="_blank"
         rel="noreferrer"
         className="flex items-center gap-2 bg-[#FEE500] text-[#191919] px-4 py-3 rounded-full shadow-lg font-bold text-xs hover:scale-105 transition-transform"
        >
        <MessageCircle className="w-4 h-4 fill-current" /> 카카오톡 1:1 상담
       </a>
       <a
        href="https://talk.naver.com/profile/wzb7nyu"     
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-[#03CF5D] text-white px-4 py-3 rounded-full shadow-lg font-bold text-xs hover:scale-105 transition-transform"
       >
      <MessageCircle className="w-4 h-4 fill-current" /> 네이버 톡톡 문의
       </a>
      </div>
    </div>
  );
}