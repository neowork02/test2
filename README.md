Vue 템플릿 로컬 빌드 방법
==================

# 1. Node.js 설치

아래 주소로 이동하여 Node.js 설치.

* https://nodejs.org/dist/v14.16.0/

stable version v14.16.0 버전 설치 (2021.07.08 기준)

` 개인별 사용 OS 맞는 버전 다운로드 
` 명령 프롬프트 시작하여 설치 됐는지 확인


[ 노드 버전 확인 ]  - v14.16.0
 
  <span style="color:red;">node -v</span>

[ npm 버전 확인 ]  - 7.19.1 

  <span style="color:red;">npm -v</span>



# 3. Yarn 설치

 명령 프롬프트 에서 NPM명령어를 사용하여 Yarn 설치.

* Yarn 설치
	- $ <span style="color:red;">npm install -g yarn</span> 
* Yarn 버전 확인 - 1.22.10
	- $ <span style="color:red;">yarn --version</span>  

# 4. package.json으로부터 의존성 모듈 설치

 명령 프롬프트 에서 Yarn OR NPM명령어를 사용하여 의존성 모듈 설치.

* 경로 설정
	- 명령 프롬프트 에서 해당 프로젝트 <span style="color:blue;">frontend</span> 경로로 이동 (ex. /Users/jstuie/Documents/OSC/kmtc/sample/ekmtc-web/frontend)
	
* <span style="color:red;">yarn install</span> 또는 <span style="color:red;">npm install</span>

# 5. 템플릿 빌드 및 서버구동

 명령 프롬프트 에서 Yarn OR NPM명령어를 사용하여 빌드 및 서버를 구동

* 경로
	- 명령 프롬프트 에서 해당 프로젝트 <span style="color:blue;">frontend</span> 경로로 이동 (ex. /Users/jstuie/Documents/OSC/kmtc/sample/ekmtc-web/frontend)

* Vue 빌드 : <span style="color:red;">yarn build</span> 또는 <span style="color:red;">npm run build</span> 
	- 빌드된 파일은 <span style="color:blue;">'../src/main/resources/static'</span>에 생성되고 해당 경로에서 <span style="color:blue;">'Refresh'</span>
* Vue 서버구동 : <span style="color:red;">yarn serve</span> 또는 <span style="color:red;">npm run serve</span>
	- 종료시에는 명령프롬프트 에서 <span style="color:red;">Ctrl + C -> 'y'</span> 입력 후 <span style="color:blue;">Enter</span>

* Vue 화면 개발시 참고
	- 서비스(Java)가 없거나 수정이 없으면서 Vue화면 수정하는 경우.
		- Fo프로젝트 서버(Spring Boot) 실행.
		- Vue 서버구동(yarn 또는 npm)하여 'Terminal'에서 접속주소 확인하여 접속해서 확인.
			- yarn serve or npm run serve
		
``` 
빌드 완료 및 서버 구동이 되면 접속주소를 확인할 수 있으며
해당 주소를 브라우저로 접속
``` 


## 1. Vue 화면 개발시 참고
* Vue 서버구동(yarn 또는 npm)하여 'Terminal'에서 접속주소 확인하여 접속해서 확인.
	- (SpringBoot서버 IP로 확인하는 경우 Vue소스 'Build' 후 'Refresh' )
	
## 2. 폴더 경로
* api : api 통신 모듈
* assets : image, css 등.. 외부 자원들에 대한 폴더
* components : 공통으로 사용되는 Vue 컴포넌트들이 모여 있는 디렉토리
* layout : 화면 Layout (Header, Footer, Main)
* pages : 업무별 화면
* minxins : 공통함수
* router : 업무별 메뉴정보, vue-router 설정을 하는 디렉토리
* store : 상태관리를 위한 패턴이자 라이브러리
* locales : 다국어관련 파일

