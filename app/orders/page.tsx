'use client';

import React, { useState } from 'react';

// 오더 타입 정의
interface OrderItem {
  id: number;
  category: string;
  item: string;
  brand: string;
  spec: string;
  detailSpec: string;
  extraInfo: string;
  qty: number;
  price: number;
  total: number;
}

interface Order {
  id: string;
  reservationTime: string;
  status: string;
  region: string;
  type: string;
  summaryItem: string;
  totalQty: number;
  totalPrice: number;
  items: OrderItem[];
  feeDeduction: number;
  remainingAmount: number;
  customerRequest: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
}

// 샘플 데이터
const initialOrders: Order[] = [
  {
    id: '20261017-0023',
    reservationTime: '2026-10-20(화) 오전 10:00',
    status: '대기',
    region: '서울 강동',
    type: '청소',
    summaryItem: '에어컨 스탠드 외 1건',
    totalQty: 2,
    totalPrice: 170000,
    feeDeduction: 22000,
    remainingAmount: 148000,
    customerRequest: '작업시간 준수요망',
    customerName: '홍길동',
    customerPhone: '010-1234-5678',
    customerAddress: '서울시 강동구 올림픽로 123 밴프빌딩 401호',
    items: [
      { id: 1, category: '청소', item: '에어컨', brand: '삼성', spec: '스탠드', detailSpec: '', extraInfo: '', qty: 1, price: 100000, total: 100000 },
      { id: 2, category: '청소', item: '에어컨', brand: 'LG', spec: '벽걸이', detailSpec: '', extraInfo: '', qty: 1, price: 70000, total: 70000 },
    ]
  },
  {
    id: '20261017-0028',
    reservationTime: '2026-10-20(화) 오전 10:30',
    status: '대기',
    region: '서울 송파',
    type: '청소',
    summaryItem: '세탁기 통돌이',
    totalQty: 1,
    totalPrice: 60000,
    feeDeduction: 11000,
    remainingAmount: 49000,
    customerRequest: '방문 전 전화 부탁드립니다.',
    customerName: '김철수',
    customerPhone: '010-9876-5432',
    customerAddress: '서울시 송파구 잠실로 456',
    items: [
      { id: 1, category: '청소', item: '세탁기', brand: '삼성', spec: '통돌이', detailSpec: '', extraInfo: '', qty: 1, price: 60000, total: 60000 }
    ]
  },
  {
    id: '20261017-0032',
    reservationTime: '2026-10-20(화) 오전 11:30',
    status: '대기',
    region: '경기 파주',
    type: '청소',
    summaryItem: '매트리스 싱글 외 1건',
    totalQty: 2,
    totalPrice: 120000,
    feeDeduction: 22000,
    remainingAmount: 98000,
    customerRequest: '주차공간 협소함',
    customerName: '이영희',
    customerPhone: '010-5555-7777',
    customerAddress: '경기도 파주시 교하로 789',
    items: [
      { id: 1, category: '청소', item: '매트리스', brand: '시몬스', spec: '싱글', detailSpec: '', extraInfo: '', qty: 1, price: 70000, total: 70000 },
      { id: 2, category: '청소', item: '카페트', brand: '-', spec: '소형', detailSpec: '', extraInfo: '', qty: 1, price: 50000, total: 50000 }
    ]
  }
];

export default function OrderApp() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [agreements, setAgreements] = useState<boolean[]>([false, false, false, false]);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  // 오더잡기 클릭
  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order);
    setAgreements([false, false, false, false]);
    setIsConfirmed(order.status === '확정');
  };

  // 동의 체크박스 토글
  const handleToggleAgree = (index: number) => {
    const updated = [...agreements];
    updated[index] = !updated[index];
    setAgreements(updated);
  };

  // 오더확정 클릭
  const handleConfirmOrder = () => {
    if (!agreements.every(Boolean)) {
      alert('모든 필수 동의사항에 체크해주셔야 오더확정이 가능합니다.');
      return;
    }
    if (!selectedOrder) return;

    setOrders((prev) =>
      prev.map((o) => (o.id === selectedOrder.id ? { ...o, status: '확정' } : o))
    );
    setIsConfirmed(true);
    alert(`[주문번호: ${selectedOrder.id}] 오더가 최종 확정되었습니다!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* 상단 로고 및 타이틀 */}
        <div className="flex flex-col items-center justify-center space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <img src="/logo.jpg" alt="BANFF CLEANING" className="h-16 object-contain rounded-xl shadow-sm" />
          <h1 className="text-2xl font-bold text-[#1E3653]">신규오더</h1>
          <div className="px-6 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700 border border-slate-200">
            2026년 10월 21일 수요일 오후 1:17
          </div>
        </div>

        {/* 1. 신규오더 목록 테이블 (와이어프레임 1번) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 bg-[#1E3653] text-white font-bold flex justify-between items-center">
            <span>신규 오더 목록</span>
            <span className="text-xs bg-[#8FD3D5] text-[#1E3653] px-2.5 py-1 rounded-full">
              총 {orders.length}건
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 font-bold text-slate-700">
                  <th className="p-3 border-r">주문번호</th>
                  <th className="p-3 border-r">예약일시</th>
                  <th className="p-3 border-r">매칭현황</th>
                  <th className="p-3 border-r">지역</th>
                  <th className="p-3 border-r">구분</th>
                  <th className="p-3 border-r">품목</th>
                  <th className="p-3 border-r">수량</th>
                  <th className="p-3 border-r">총액(원)</th>
                  <th className="p-3">오더매칭</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border-r font-mono text-xs">{order.id}</td>
                    <td className="p-3 border-r font-medium">{order.reservationTime}</td>
                    <td className="p-3 border-r font-bold text-red-500">{order.status}</td>
                    <td className="p-3 border-r">{order.region}</td>
                    <td className="p-3 border-r">{order.type}</td>
                    <td className="p-3 border-r text-left px-4">{order.summaryItem}</td>
                    <td className="p-3 border-r">{order.totalQty}</td>
                    <td className="p-3 border-r font-semibold">{order.totalPrice.toLocaleString()}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleSelectOrder(order)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
                          selectedOrder?.id === order.id
                            ? 'bg-[#1E3653] text-white'
                            : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white'
                        }`}
                      >
                        오더잡기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. 상세 오더정보 & 정산 (와이어프레임 2번) */}
        {selectedOrder && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-300 p-6 space-y-6">
            <h2 className="text-xl font-extrabold text-[#1E3653] text-center border-b pb-3">
              오더정보 [주문번호: {selectedOrder.id}]
            </h2>

            {/* 오더 개요 상단 표 */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-center border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                    <th className="p-2 border-r">주문번호</th>
                    <th className="p-2 border-r">예약일시</th>
                    <th className="p-2 border-r">지역</th>
                    <th className="p-2 border-r">매칭현황</th>
                    <th className="p-2">현장에서 받으실 금액(원)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-300">
                    <td className="p-2 border-r font-mono">{selectedOrder.id}</td>
                    <td className="p-2 border-r">{selectedOrder.reservationTime}</td>
                    <td className="p-2 border-r">{selectedOrder.region}</td>
                    <td className="p-2 border-r font-bold text-red-500">{selectedOrder.status}</td>
                    <td className="p-2 font-bold text-lg text-blue-600">
                      {selectedOrder.remainingAmount.toLocaleString()}원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 세부 품목 내역 표 */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                    <th className="p-2 border-r">품목</th>
                    <th className="p-2 border-r">구분</th>
                    <th className="p-2 border-r">품목</th>
                    <th className="p-2 border-r">브랜드</th>
                    <th className="p-2 border-r">규격</th>
                    <th className="p-2 border-r">수량</th>
                    <th className="p-2 border-r">단가(원)</th>
                    <th className="p-2">총액(원)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((item) => (
                    <tr key={item.id} className="border-b border-slate-200">
                      <td className="p-2 border-r">{item.id}</td>
                      <td className="p-2 border-r">{item.category}</td>
                      <td className="p-2 border-r font-semibold">{item.item}</td>
                      <td className="p-2 border-r">{item.brand}</td>
                      <td className="p-2 border-r">{item.spec}</td>
                      <td className="p-2 border-r">{item.qty}</td>
                      <td className="p-2 border-r">{item.price.toLocaleString()}</td>
                      <td className="p-2 font-semibold">{item.total.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-bold border-b border-slate-300">
                    <td colSpan={5} className="p-2 border-r text-center">계</td>
                    <td className="p-2 border-r">{selectedOrder.totalQty}</td>
                    <td className="p-2 border-r">-</td>
                    <td className="p-2">{selectedOrder.totalPrice.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 수수료 및 잔금 요약 표 */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-slate-300">
                <tbody>
                  <tr className="border-b border-slate-300">
                    <td className="p-2.5 bg-slate-100 font-bold border-r w-28 text-center">수수료공제</td>
                    <td className="p-2.5 border-r text-slate-600">※ 수수료공제 = 1대당 11,000원 (고객 결제 완료)</td>
                    <td className="p-2.5 font-bold text-right w-28 text-slate-700">
                      {selectedOrder.feeDeduction.toLocaleString()}원
                    </td>
                  </tr>
                  <tr className="border-b border-slate-300 bg-blue-50/50">
                    <td className="p-2.5 bg-slate-100 font-bold border-r text-center">현장잔금</td>
                    <td className="p-2.5 border-r font-semibold text-blue-800">
                      ※ 현장에서 고객으로부터 잔금만 받으시면 됩니다.
                    </td>
                    <td className="p-2.5 font-bold text-right text-blue-700 text-sm">
                      {selectedOrder.remainingAmount.toLocaleString()}원
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 bg-slate-100 font-bold border-r text-center">고객요청</td>
                    <td colSpan={2} className="p-2.5 font-medium text-slate-800">
                      {selectedOrder.customerRequest}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 고객정보 (오더 확정 시 노출) */}
            <div className="border border-slate-300 rounded-xl p-4 bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-700 text-center text-sm">고객정보</h3>
              {!isConfirmed ? (
                <p className="text-center text-xs text-red-500 font-medium">
                  ※ 고객정보는 오더 확정 후 볼 수 있습니다.
                </p>
              ) : (
                <div className="grid md:grid-cols-3 gap-3 text-xs bg-white p-3 rounded-lg border border-slate-200">
                  <div><span className="font-bold text-slate-500">고객명:</span> {selectedOrder.customerName}</div>
                  <div><span className="font-bold text-slate-500">연락처:</span> {selectedOrder.customerPhone}</div>
                  <div><span className="font-bold text-slate-500">현장주소:</span> {selectedOrder.customerAddress}</div>
                </div>
              )}
            </div>

            {/* 3. 현장사진 & 필수 동의사항 (와이어프레임 3번) */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="font-bold text-slate-800 text-center">현장사진 등록</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="h-20 bg-slate-100 rounded-lg border border-dashed border-slate-300 flex flex-col items-center justify-center text-xs text-slate-400 cursor-pointer hover:bg-slate-200 transition-colors">
                    <span>사진 {num}</span>
                    <span className="text-[10px] text-slate-300">+ 등록</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4">
                <h3 className="font-bold text-slate-800 text-center text-sm">필수 동의사항</h3>
                <div className="border border-slate-300 rounded-xl overflow-hidden text-xs">
                  <div className="bg-slate-100 p-2 font-bold border-b text-center grid grid-cols-12">
                    <span className="col-span-2">번호</span>
                    <span className="col-span-8">내용</span>
                    <span className="col-span-2">동의</span>
                  </div>
                  {[
                    '예약일시 24시간전부터는 오더 취소가 불가합니다. 신중하게 선택해 주세요.',
                    '작업 당일, 마이페이지에서 (1) 목적지 출발 (2) 목적지 도착 (3) 작업완료 버튼을 클릭해 주세요.',
                    '잔금의 결제방법(계좌입금,카드결제)은 현장에서 고객과 협의해 주세요. 저희는 관여하지 않습니다.',
                    'A/S 발생 및 제품의 파손 등에 관한 모든 책임은 엔지니어에게 있으며 저희는 책임지지 않습니다.'
                  ].map((text, idx) => (
                    <div key={idx} className="p-2.5 border-b grid grid-cols-12 items-center text-slate-700 bg-white">
                      <span className="col-span-2 text-center font-bold">{idx + 1}</span>
                      <span className="col-span-8">{text}</span>
                      <div className="col-span-2 text-center">
                        <input
                          type="checkbox"
                          checked={agreements[idx]}
                          onChange={() => handleToggleAgree(idx)}
                          className="w-4 h-4 text-[#1E3653] rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-2 space-y-3">
                <p className="text-xs font-semibold text-slate-600">
                  위 사항에 동의하며, 오더를 수락합니다.
                </p>
                <button
                  onClick={handleConfirmOrder}
                  disabled={isConfirmed}
                  className={`w-full max-w-md py-3.5 rounded-xl text-sm font-bold shadow-md transition-all ${
                    isConfirmed
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-[#1E3653] text-white hover:bg-[#2a4a70]'
                  }`}
                >
                  {isConfirmed ? '✓ 오더 확정 완료' : '오더확정'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}