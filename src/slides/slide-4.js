window.slideDataMap.set(4, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 背景装饰 -->
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#2E8B8B]/10 to-transparent rounded-full translate-y-1/3 -translate-x-1/4"></div>
    
    <!-- 顶部装饰线 -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#2E8B8B] to-[#F4A261]"></div>
    
    <!-- 主内容区 -->
    <div class="relative z-10 h-full flex flex-col px-24 py-14">
      <!-- 标题区 -->
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-[#2E8B8B] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold font-title">02</span>
          </div>
          <p class="text-sm font-semibold tracking-widest text-[#2E8B8B]">服务边界原则</p>
        </div>
        <h2 class="text-4xl font-bold text-[#1E3A5F] font-title">我们提供的服务</h2>
        <div class="w-20 h-1 bg-[#F4A261] mt-4 rounded-full"></div>
      </div>
      
      <!-- 内容区 -->
      <div class="flex-1 grid grid-cols-2 gap-6">
        <!-- 服务1：智能体落地基础支持 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-[#1E3A5F] hover:shadow-xl transition-shadow">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[#1E3A5F] mb-2 font-title">智能体落地基础支持</h3>
              <p class="text-[#5A6A7A] leading-relaxed text-sm">
                提供智能体落地工具、详细指导手册，助力企业快速上手，降低技术门槛，确保智能体能够顺利部署到实际业务场景中。
              </p>
            </div>
          </div>
        </div>
        
        <!-- 服务2：硬件与部署服务 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-[#2E8B8B] hover:shadow-xl transition-shadow">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-14 h-14 bg-[#2E8B8B] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[#1E3A5F] mb-2 font-title">硬件与部署服务</h3>
              <p class="text-[#5A6A7A] leading-relaxed text-sm">
                智能体本地硬件搭建、常规本地模型服务器支撑，以及端云分布式智能体规划部署（含高级大模型token需求等相关成本）。
              </p>
            </div>
          </div>
        </div>
        
        <!-- 服务3：培训与陪跑服务 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-[#F4A261] hover:shadow-xl transition-shadow">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-14 h-14 bg-[#F4A261] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-[#1E3A5F] mb-2 font-title">培训与陪跑服务</h3>
              <p class="text-[#5A6A7A] leading-relaxed text-sm">
                线下智能体操作培训、岗位流程协助梳理，智能体的搭建、调试，以及后期运行陪跑，确保服务落地见效。
              </p>
            </div>
          </div>
        </div>
        
        <!-- 服务4：核心能力赋能 -->
        <div class="bg-gradient-to-br from-[#1E3A5F] to-[#2E8B8B] rounded-2xl p-6 shadow-lg text-white">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-2 font-title">核心能力赋能</h3>
              <p class="text-white/90 leading-relaxed text-sm mb-3">
                通过Openclaw智能体，辅助企业快速形成关键拓客能力：
              </p>
              <div class="grid grid-cols-2 gap-2">
                <div class="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                  <span class="text-sm">短视频脚本生成</span>
                </div>
                <div class="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                  <span class="text-sm">多平台分发调度</span>
                </div>
                <div class="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                  <span class="text-sm">评论情感识别</span>
                </div>
                <div class="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                  <span class="text-sm">线索自动归集</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 页码 -->
    <div class="absolute bottom-8 right-12 text-[#5A6A7A] text-sm">
      <span class="font-bold text-[#1E3A5F]">04</span> / 16
    </div>
  </div>
`);
