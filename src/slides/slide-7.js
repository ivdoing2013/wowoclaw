window.slideDataMap.set(7, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#1E3A5F]/10 to-transparent rounded-full -translate-x-1/4 -translate-y-1/4"></div>
    
    <!-- 顶部装饰线 -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#2E8B8B] to-[#F4A261]"></div>
    
    <!-- 主内容区 -->
    <div class="relative z-10 h-full flex flex-col px-24 py-14">
      <!-- 标题区 -->
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-[#F4A261] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold font-title">03</span>
          </div>
          <p class="text-sm font-semibold tracking-widest text-[#F4A261]">硬件部署</p>
        </div>
        <h2 class="text-4xl font-bold text-[#1E3A5F] font-title">硬件部署与技术架构</h2>
        <div class="w-20 h-1 bg-[#F4A261] mt-4 rounded-full"></div>
      </div>
      
      <!-- 内容区 -->
      <div class="flex-1 grid grid-cols-5 gap-6">
        <!-- 左侧：硬件配置（占3列） -->
        <div class="col-span-3 space-y-4">
          <!-- 主节点 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-[#1E3A5F]/20">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1E3A5F] to-[#2E8B8B] rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-bold text-[#1E3A5F] font-title">主节点（主龙虾）</h3>
                  <span class="px-3 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-semibold rounded-full">Mac mini M5/M5 Pro</span>
                </div>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#2E8B8B] rounded-full"></div>
                    <span>内存 ≥25GB</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#2E8B8B] rounded-full"></div>
                    <span>SSD 256GB</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#2E8B8B] rounded-full"></div>
                    <span>千兆网口</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#2E8B8B] rounded-full"></div>
                    <span>主调度、Agent管理</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 算力服务器 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-[#2E8B8B]/20">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#2E8B8B] to-[#1E3A5F] rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-bold text-[#1E3A5F] font-title">4卡5090算力服务器</h3>
                  <span class="px-3 py-1 bg-[#2E8B8B]/10 text-[#2E8B8B] text-xs font-semibold rounded-full">RTX5090×4</span>
                </div>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                    <span>4U机架式</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                    <span>CPU ≥32核</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                    <span>内存 ≥256GB DDR5 ECC</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                    <span>系统盘 1TB NVMe</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                    <span>双冗余电源 ≥2400W</span>
                  </div>
                  <div class="flex items-center gap-2 text-[#5A6A7A]">
                    <div class="w-1.5 h-1.5 bg-[#F4A261] rounded-full"></div>
                    <span>双10G网口</span>
                  </div>
                </div>
                <div class="mt-3 flex gap-2">
                  <span class="px-2 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs rounded">Token输出</span>
                  <span class="px-2 py-1 bg-[#2E8B8B]/10 text-[#2E8B8B] text-xs rounded">大模型推理</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 机柜与系统 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-[#F4A261]/20">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-[#1E3A5F] text-sm">标准机柜</h4>
              </div>
              <p class="text-[#5A6A7A] text-xs">19英寸，22U/24U，深度≥800mm，含风扇、理线架、托盘</p>
            </div>
            
            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-[#1E3A5F]/20">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-[#1E3A5F] text-sm">系统环境</h4>
              </div>
              <p class="text-[#5A6A7A] text-xs">Ubuntu+CUDA，适配vLLM/Ollama等推理框架</p>
            </div>
          </div>
        </div>
        
        <!-- 右侧：架构图与特点（占2列） -->
        <div class="col-span-2 space-y-4">
          <!-- 架构概览 -->
          <div class="bg-gradient-to-br from-[#1E3A5F] to-[#2E8B8B] rounded-2xl p-5 text-white shadow-lg">
            <h3 class="text-lg font-bold mb-4 font-title flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              本地大模型推理集群
            </h3>
            
            <!-- 架构示意图 -->
            <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div class="flex flex-col items-center gap-3">
                <!-- 主节点 -->
                <div class="w-full bg-white/20 rounded-lg p-3 text-center">
                  <div class="text-sm font-semibold mb-1">主节点（主龙虾）</div>
                  <div class="text-xs text-white/70">Mac mini M5 | 调度管理</div>
                </div>
                <!-- 箭头 -->
                <svg class="w-6 h-6 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                <!-- 算力服务器 -->
                <div class="w-full bg-[#F4A261]/30 rounded-lg p-3 text-center border border-[#F4A261]/50">
                  <div class="text-sm font-semibold mb-1">4卡5090算力服务器</div>
                  <div class="text-xs text-white/70">RTX5090×4 | Token输出/推理</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 核心特点 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-[#2E8B8B]/20">
            <h3 class="text-lg font-bold text-[#1E3A5F] mb-4 font-title">核心特点</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3 bg-[#1E3A5F]/5 rounded-lg">
                <div class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-[#5A6A7A] text-sm">支持7×24h稳定运行</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-[#2E8B8B]/5 rounded-lg">
                <div class="w-8 h-8 bg-[#2E8B8B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-[#5A6A7A] text-sm">适配vLLM/Ollama框架</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-[#F4A261]/5 rounded-lg">
                <div class="w-8 h-8 bg-[#F4A261] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-[#5A6A7A] text-sm">端云分布式部署支持</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-[#1E3A5F]/5 rounded-lg">
                <div class="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-[#5A6A7A] text-sm">数据主权私有化部署</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 页码 -->
    <div class="absolute bottom-8 right-12 text-[#5A6A7A] text-sm">
      <span class="font-bold text-[#1E3A5F]">07</span> / 16
    </div>
  </div>
`);
