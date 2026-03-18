window.slideDataMap.set(6, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 背景装饰 -->
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#2E8B8B]/10 to-transparent rounded-full translate-y-1/3 translate-x-1/4"></div>
    
    <!-- 顶部装饰线 -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#2E8B8B] to-[#F4A261]"></div>
    
    <!-- 主内容区 -->
    <div class="relative z-10 h-full flex flex-col px-24 py-14">
      <!-- 标题区 -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-[#2E8B8B] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold font-title">02</span>
          </div>
          <p class="text-sm font-semibold tracking-widest text-[#2E8B8B]">项目落地验收</p>
        </div>
        <h2 class="text-4xl font-bold text-[#1E3A5F] font-title">验收标准与周期</h2>
        <div class="w-20 h-1 bg-[#F4A261] mt-4 rounded-full"></div>
      </div>
      
      <!-- 内容区 -->
      <div class="flex-1 grid grid-cols-2 gap-8">
        <!-- 左侧：四大验收标准 -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-[#1E3A5F] font-title mb-4 flex items-center gap-2">
            <span class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center text-white text-sm">标</span>
            四大验收标准
          </h3>
          
          <!-- 标准1 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border-l-4 border-[#1E3A5F]">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-[#1E3A5F] mb-1">设备部署完成</h4>
                <p class="text-[#5A6A7A] text-sm">物理设备、智能体部署完成并能稳定运行，无核心故障</p>
              </div>
            </div>
          </div>
          
          <!-- 标准2 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border-l-4 border-[#2E8B8B]">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[#2E8B8B] rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-[#1E3A5F] mb-1">功能运行正常</h4>
                <p class="text-[#5A6A7A] text-sm">智能体可正常执行预设的多媒体拓客工作流任务，响应准确率<span class="text-[#2E8B8B] font-bold">≥90%</span></p>
              </div>
            </div>
          </div>
          
          <!-- 标准3 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border-l-4 border-[#F4A261]">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[#F4A261] rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-[#1E3A5F] mb-1">人员培训合格</h4>
                <p class="text-[#5A6A7A] text-sm">企业指定人员通过智能体操作培训考核，具备独立执行基础能力</p>
              </div>
            </div>
          </div>
          
          <!-- 标准4 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border-l-4 border-[#1E3A5F]">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-[#1E3A5F] mb-1">文档交付齐全</h4>
                <p class="text-[#5A6A7A] text-sm">交付文档齐全，包含部署配置清单、操作手册、故障排查指南及陪跑服务记录</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右侧：验收周期与流程 -->
        <div class="space-y-6">
          <!-- 验收周期卡片 -->
          <div class="bg-gradient-to-br from-[#1E3A5F] to-[#2E8B8B] rounded-2xl p-6 text-white shadow-lg">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-title">验收周期</h3>
                <p class="text-white/70 text-sm">Project Acceptance Timeline</p>
              </div>
            </div>
            <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div class="flex items-center justify-between mb-3">
                <span class="text-white/80">交付后开始计算</span>
                <span class="text-3xl font-bold text-[#F4A261]">30天</span>
              </div>
              <p class="text-white/70 text-sm">验收工作需在智能体交付后<span class="text-white font-semibold">30个自然日</span>内完成，双方确认验收结果后，正式完成服务落地交接。</p>
            </div>
          </div>
          
          <!-- 交付文档清单 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#2E8B8B]/20">
            <h3 class="text-lg font-bold text-[#1E3A5F] mb-4 font-title flex items-center gap-2">
              <svg class="w-5 h-5 text-[#2E8B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              交付文档清单
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="flex items-center gap-2 p-3 bg-[#1E3A5F]/5 rounded-lg">
                <div class="w-2 h-2 bg-[#1E3A5F] rounded-full"></div>
                <span class="text-[#5A6A7A] text-sm">部署配置清单</span>
              </div>
              <div class="flex items-center gap-2 p-3 bg-[#2E8B8B]/5 rounded-lg">
                <div class="w-2 h-2 bg-[#2E8B8B] rounded-full"></div>
                <span class="text-[#5A6A7A] text-sm">操作手册</span>
              </div>
              <div class="flex items-center gap-2 p-3 bg-[#F4A261]/5 rounded-lg">
                <div class="w-2 h-2 bg-[#F4A261] rounded-full"></div>
                <span class="text-[#5A6A7A] text-sm">故障排查指南</span>
              </div>
              <div class="flex items-center gap-2 p-3 bg-[#1E3A5F]/5 rounded-lg">
                <div class="w-2 h-2 bg-[#1E3A5F] rounded-full"></div>
                <span class="text-[#5A6A7A] text-sm">陪跑服务记录</span>
              </div>
            </div>
          </div>
          
          <!-- 关键指标 -->
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md text-center">
              <div class="text-3xl font-bold text-[#1E3A5F] mb-1">≥90%</div>
              <div class="text-[#5A6A7A] text-sm">响应准确率</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md text-center">
              <div class="text-3xl font-bold text-[#2E8B8B] mb-1">30天</div>
              <div class="text-[#5A6A7A] text-sm">验收周期</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md text-center">
              <div class="text-3xl font-bold text-[#F4A261] mb-1">4项</div>
              <div class="text-[#5A6A7A] text-sm">交付文档</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 页码 -->
    <div class="absolute bottom-8 right-12 text-[#5A6A7A] text-sm">
      <span class="font-bold text-[#1E3A5F]">06</span> / 16
    </div>
  </div>
`);
