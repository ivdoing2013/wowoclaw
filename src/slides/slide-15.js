window.slideDataMap.set(15, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 背景装饰 -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#2E8B8B]/10 to-transparent rounded-full -translate-y-1/3 translate-x-1/4"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F4A261]/10 to-transparent rounded-full translate-y-1/3 -translate-x-1/4"></div>
    
    <!-- 顶部装饰线 -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#2E8B8B] to-[#F4A261]"></div>
    
    <!-- 主内容区 -->
    <div class="relative z-10 h-full flex flex-col px-24 py-14">
      <!-- 标题区 -->
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold font-title">06</span>
          </div>
          <p class="text-sm font-semibold tracking-widest text-[#1E3A5F]">AI赋能</p>
        </div>
        <h2 class="text-4xl font-bold text-[#1E3A5F] font-title">AI赋能应用场景</h2>
        <div class="w-20 h-1 bg-[#F4A261] mt-4 rounded-full"></div>
      </div>
      
      <!-- 内容区 -->
      <div class="flex-1 grid grid-cols-3 gap-6">
        <!-- 运营总监 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t-4 border-[#1E3A5F]">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E3A5F] font-title">运营总监</h3>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-[#1E3A5F]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">竞品分析</h4>
                <p class="text-[#5A6A7A] text-xs">AI自动收集分析竞品动态</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#2E8B8B]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#2E8B8B] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">行业趋势预测</h4>
                <p class="text-[#5A6A7A] text-xs">基于大数据预测行业趋势</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#F4A261]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#F4A261] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">智能数据报表</h4>
                <p class="text-[#5A6A7A] text-xs">自动生成可视化数据报表</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 拓客专员 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t-4 border-[#2E8B8B]">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-14 h-14 bg-[#2E8B8B] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E3A5F] font-title">拓客专员</h3>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-[#1E3A5F]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">智能广告投放</h4>
                <p class="text-[#5A6A7A] text-xs">AI优化广告投放策略</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#2E8B8B]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#2E8B8B] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">用户画像分析</h4>
                <p class="text-[#5A6A7A] text-xs">精准分析目标客户画像</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#F4A261]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#F4A261] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">自动化客户触达</h4>
                <p class="text-[#5A6A7A] text-xs">智能触达潜在客户</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 内容策划 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t-4 border-[#F4A261]">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-14 h-14 bg-[#F4A261] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E3A5F] font-title">内容策划</h3>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-[#1E3A5F]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">AI文案生成</h4>
                <p class="text-[#5A6A7A] text-xs">智能生成短视频脚本</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#2E8B8B]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#2E8B8B] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">热点自动追踪</h4>
                <p class="text-[#5A6A7A] text-xs">实时追踪平台热点话题</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#F4A261]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#F4A261] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">辅助视觉设计</h4>
                <p class="text-[#5A6A7A] text-xs">AI辅助生成设计素材</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 短视频运营 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t-4 border-[#1E3A5F]">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E3A5F] font-title">短视频运营</h3>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-[#1E3A5F]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">AI自动剪辑</h4>
                <p class="text-[#5A6A7A] text-xs">智能剪辑视频素材</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#2E8B8B]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#2E8B8B] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">AI配音</h4>
                <p class="text-[#5A6A7A] text-xs">智能生成配音音频</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#F4A261]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#F4A261] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">自动字幕生成</h4>
                <p class="text-[#5A6A7A] text-xs">自动识别生成字幕</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 健康顾问 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t-4 border-[#2E8B8B]">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-14 h-14 bg-[#2E8B8B] rounded-xl flex items-center justify-center shadow-md">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1E3A5F] font-title">健康顾问</h3>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-[#1E3A5F]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">AI健康评估</h4>
                <p class="text-[#5A6A7A] text-xs">智能分析健康数据</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-3 bg-[#2E8B8B]/5 rounded-lg">
              <div class="w-8 h-8 bg-[#2E8B8B] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] text-sm">个性化方案推荐</h4>
                <p class="text-[#5A6A7A] text-xs">推荐个性化氧疗方案</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 核心价值 -->
        <div class="bg-gradient-to-br from-[#1E3A5F] to-[#2E8B8B] rounded-2xl p-6 shadow-lg text-white">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold font-title">核心价值</h3>
          </div>
          
          <div class="space-y-4">
            <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div class="text-3xl font-bold mb-1">效率提升</div>
              <p class="text-white/80 text-sm">减少重复性工作，提升运营效率</p>
            </div>
            
            <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div class="text-3xl font-bold mb-1">数据驱动</div>
              <p class="text-white/80 text-sm">基于数据分析优化决策</p>
            </div>
            
            <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div class="text-3xl font-bold mb-1">持续迭代</div>
              <p class="text-white/80 text-sm">智能体能力持续进化</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 页码 -->
    <div class="absolute bottom-8 right-12 text-[#5A6A7A] text-sm">
      <span class="font-bold text-[#1E3A5F]">15</span> / 16
    </div>
  </div>
`);
