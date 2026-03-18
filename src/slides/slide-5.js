window.slideDataMap.set(5, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 背景装饰 -->
    <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#5A6A7A]/5 to-transparent rounded-full -translate-y-1/4 translate-x-1/4"></div>
    
    <!-- 顶部装饰线 -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#2E8B8B] to-[#F4A261]"></div>
    
    <!-- 主内容区 -->
    <div class="relative z-10 h-full flex flex-col px-24 py-14">
      <!-- 标题区 -->
      <div class="mb-10">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-[#5A6A7A] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold font-title">02</span>
          </div>
          <p class="text-sm font-semibold tracking-widest text-[#5A6A7A]">服务边界原则</p>
        </div>
        <h2 class="text-4xl font-bold text-[#1E3A5F] font-title">我们不提供的服务</h2>
        <div class="w-20 h-1 bg-[#F4A261] mt-4 rounded-full"></div>
        <p class="text-[#5A6A7A] mt-4 text-lg">为明确服务边界，以下内容不在本次智能体服务赋能范围内</p>
      </div>
      
      <!-- 内容区 -->
      <div class="flex-1 flex gap-10">
        <!-- 左侧：商业运营类 -->
        <div class="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#5A6A7A]/20">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-[#5A6A7A]/10 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-[#5A6A7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-[#1E3A5F] font-title">商业运营类</h3>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3 p-4 bg-[#5A6A7A]/5 rounded-xl">
              <div class="flex-shrink-0 w-6 h-6 bg-[#5A6A7A]/20 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-[#5A6A7A] text-xs font-bold">1</span>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] mb-1">具体的商业内容输出</h4>
                <p class="text-[#5A6A7A] text-sm">不提供具体的营销文案、广告创意等商业内容创作服务</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-4 bg-[#5A6A7A]/5 rounded-xl">
              <div class="flex-shrink-0 w-6 h-6 bg-[#5A6A7A]/20 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-[#5A6A7A] text-xs font-bold">2</span>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] mb-1">拓客规划</h4>
                <p class="text-[#5A6A7A] text-sm">不提供具体的拓客策略制定、客户开发计划等商业规划服务</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-4 bg-[#5A6A7A]/5 rounded-xl">
              <div class="flex-shrink-0 w-6 h-6 bg-[#5A6A7A]/20 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-[#5A6A7A] text-xs font-bold">3</span>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] mb-1">项目落地效果保证</h4>
                <p class="text-[#5A6A7A] text-sm">不承诺具体的业务增长指标或拓客效果保证</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-4 bg-[#5A6A7A]/5 rounded-xl">
              <div class="flex-shrink-0 w-6 h-6 bg-[#5A6A7A]/20 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-[#5A6A7A] text-xs font-bold">4</span>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] mb-1">实体团队商业培训</h4>
                <p class="text-[#5A6A7A] text-sm">不提供面向实体团队的商业运营、销售技巧等培训</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右侧：多媒体运营类 -->
        <div class="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#5A6A7A]/20">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-[#5A6A7A]/10 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-[#5A6A7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-[#1E3A5F] font-title">多媒体运营类</h3>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3 p-4 bg-[#5A6A7A]/5 rounded-xl">
              <div class="flex-shrink-0 w-6 h-6 bg-[#5A6A7A]/20 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-[#5A6A7A] text-xs font-bold">1</span>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] mb-1">多媒体选题确定</h4>
                <p class="text-[#5A6A7A] text-sm">不提供具体的短视频选题、内容主题策划服务</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-4 bg-[#5A6A7A]/5 rounded-xl">
              <div class="flex-shrink-0 w-6 h-6 bg-[#5A6A7A]/20 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-[#5A6A7A] text-xs font-bold">2</span>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] mb-1">媒体露出策划</h4>
                <p class="text-[#5A6A7A] text-sm">不提供媒体投放策略、露出渠道规划等策划服务</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3 p-4 bg-[#5A6A7A]/5 rounded-xl">
              <div class="flex-shrink-0 w-6 h-6 bg-[#5A6A7A]/20 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-[#5A6A7A] text-xs font-bold">3</span>
              </div>
              <div>
                <h4 class="font-semibold text-[#1E3A5F] mb-1">媒体露出执行</h4>
                <p class="text-[#5A6A7A] text-sm">不执行具体的媒体投放、内容发布等运营操作</p>
              </div>
            </div>
          </div>
          
          <!-- 说明框 -->
          <div class="mt-6 p-4 bg-[#F4A261]/10 rounded-xl border border-[#F4A261]/30">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#F4A261] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-[#5A6A7A] text-sm">
                <span class="font-semibold text-[#1E3A5F]">说明：</span>明确边界避免误解，我们聚焦<span class="text-[#2E8B8B] font-semibold">技术赋能</span>而非代运营，确保双方对服务范围有清晰认知。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 页码 -->
    <div class="absolute bottom-8 right-12 text-[#5A6A7A] text-sm">
      <span class="font-bold text-[#1E3A5F]">05</span> / 16
    </div>
  </div>
`);
