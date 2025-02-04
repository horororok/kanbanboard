# Kanban Board

Vite를 사용하여 만든 **Kanban Board 프로젝트**입니다. 이 프로젝트는 React 기반으로 제작되었으며, 사용자가 할 일을 효과적으로 관리할 수 있도록 다양한 기능을 제공합니다.

## 🚀 프로젝트 개요

Kanban Board는 **프로젝트 및 작업 관리**를 위한 웹 애플리케이션입니다. 사용자는 컬럼을 추가하고, 카드를 생성 및 이동하며, 프로젝트의 진행 상황을 쉽게 추적할 수 있습니다.

## 📌 주요 기능

- **프로젝트 제목 수정**: 사용자가 프로젝트 제목을 변경할 수 있습니다.
- **컬럼 추가 및 삭제**: 기본 컬럼(시작 전, 진행 중, 완료) 외에도 추가적인 컬럼을 생성하고 삭제할 수 있습니다.
- **카드 추가, 수정, 삭제**:
  - 컬럼 내에서 새로운 카드를 생성할 수 있습니다.
  - 생성된 카드는 수정 및 삭제할 수 있습니다.
- **카드 이동**:
  - 드래그 앤 드롭(Drag & Drop) 기능을 이용하여 카드의 위치를 변경할 수 있습니다.
  - 같은 컬럼 내에서 순서를 조정할 수 있으며, 다른 컬럼으로 이동도 가능합니다.
- **상태 저장**: 로컬 스토리지를 활용하여 보드의 상태를 유지할 수 있습니다.
- **반응형 디자인 지원**: 모바일, 태블릿, 데스크톱 환경에서 최적의 UI를 제공합니다.
- **태그 관리**: 카드별 태그를 추가하고 색상을 지정할 수 있습니다.
- **애니메이션 효과**: 드래그 시 부드러운 이동 효과 및 카드 추가/삭제 시 애니메이션을 제공합니다.
- **배포**: Vercel 을 이용한 배포 예정.

## 🛠 기술 스택

- **Frontend**: React, Vite
- **Styling**: Styled Components
- **Storage**: LocalStorage

## 프로젝트 구조

```sh
src/
├── components/           # 재사용 가능한 컴포넌트들
│   ├── Board/           # 칸반보드 관련 컴포넌트
│   │   ├── Board.jsx    # 메인 보드 컴포넌트
│   │   ├── Column.jsx   # 컬럼 컴포넌트
│   │   └── Card.jsx     # 카드 컴포넌트
│   ├── common/          # 공통 컴포넌트
│   │   ├── Button/      # 버튼 컴포넌트
│   │   │   ├── Button.jsx
│   │   │   └── Button.styles.js
│   │   └── Modal/       # 모달 컴포넌트
│   │       ├── Modal.jsx
│   │       └── Modal.styles.js
│   └── Tag/             # 태그 관련 컴포넌트
│       ├── Tag.jsx
│       └── TagPicker.jsx
├── hooks/               # 커스텀 훅
│   ├── useDragAndDrop.js     # 드래그 앤 드롭 로직
│   ├── useLocalStorage.js    # 로컬 스토리지 관리
│   └── useBoard.js           # 보드 상태 관리
├── styles/              # 스타일 관련 파일들
│   ├── GlobalStyle.js        # 전역 스타일
│   ├── theme.js             # 테마 설정
│   └── animations.js        # 애니메이션 정의
├── utils/               # 유틸리티 함수들
│   ├── localStorage.js       # 로컬 스토리지 헬퍼
│   └── dragAndDrop.js       # 드래그 앤 드롭 헬퍼
├── constants/           # 상수 정의
│   └── board.js             # 보드 관련 상수
├── App.jsx             # 앱 진입점
└── main.jsx            # React 진입점

```

## 📦 설치 및 실행 방법

### 1. 프로젝트 클론

```sh
git clone https://github.com/horororok/kanbanboard.git
cd kanbanboard
```

### 2. 패키지 설치

```sh
npm install
```

### 3. 개발 서버 실행

```sh
npm run dev
```

### 4. 배포

배포 방법은 선택한 서비스에 따라 다를 수 있습니다. Vercel

## 📜 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
