/**
 * ==========================================================================
 * PT KARYA CIPTA SETIAWAN (KCS)
 * Main Interactive Application Script
 * Selalu Siap Setiap Saat 24 Jam ON
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. EQUIPMENT CATALOG DATA (Matched to www.chas.co.id)
    // ----------------------------------------------------------------------
    const equipmentCatalog = [
        {
            id: 't136-foco',
            name: 'T-136',
            model: 'FOCO TRUCK CRANE',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: 'Heavy Cargo & Crane',
            engine: 'Hino / Isuzu Heavy Chassis',
            reach: 'Telescopic Crane Arm',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/T-136-768x576.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop',
            description: 'Truk FOCO serbaguna yang dilengkapi dengan derek hidrolik teleskopik untuk pengangkutan dan pembongkaran muatan berat di lokasi proyek secara mandiri.',
            specs: {
                'Unit Code': 'T-136 FOCO',
                'Application': 'Heavy Cargo Transport & Mobilization',
                'Crane Mechanism': 'Hydraulic Telescopic Crane',
                'Flatbed Deck': 'Reinforced Steel Deck',
                'Certification': 'Certified Operator & SIA Compliant'
            }
        },
        {
            id: 'telehandler-kanan',
            name: 'TELEHANDLER',
            model: 'MULTI-PURPOSE LIFT TRUCK',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '4.5 Ton Lift',
            engine: 'Perkins / Cummins Turbocharged',
            reach: '17 Meter Max Extension',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/kanan-768x576.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1000&auto=format&fit=crop',
            description: 'Telehandler berkemampuan tinggi untuk menjangkau ketinggian di situs konstruksi, ideal untuk penanganan material dan pemasangan struktur.',
            specs: {
                'Max Lifting Capacity': '4,500 kg',
                'Max Lift Height': '17.0 Meters',
                'Forward Reach': '12.5 Meters',
                'Drive': '4WD / 4-Wheel Steer',
                'Safety': 'Overload Indicator & SIA Operator'
            }
        },
        {
            id: 'wheel-loader',
            name: 'WHEEL LOADER',
            model: 'HEAVY CAPACITY LOADER',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '3.0 - 4.5 m³ Bucket',
            engine: 'Komatsu / CAT Turbo Diesel',
            reach: 'Standard Dump Clearance',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/IMG_20170303_092741-768x1024.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1579407364450-481fe19d4b4a?q=80&w=1000&auto=format&fit=crop',
            description: 'Wheel Loader berkapasitas besar untuk pengerukan tanah, pemindahan agregat tambang, serta muat bahan baku ke armada dump truck.',
            specs: {
                'Bucket Capacity': '3.0 - 4.5 m³',
                'Operating Weight': '18,500 kg',
                'Dump Clearance': '3,100 mm',
                'Breakout Force': '170 kN',
                'Transmission': 'Powershift Automatic'
            }
        },
        {
            id: 'roughter-crane-50t',
            name: 'Roughter Crane',
            model: 'CAPACITY 50T',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '50 Ton',
            engine: 'Mitsubishi / Tadano Power Plant',
            reach: '35m Boom + Jib',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-09.50.21-768x1024.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
            description: 'Mobile Rough Terrain Crane 50 Ton dengan daya jelajah tinggi di medan sempit dan tidak rata untuk pengangkatan presisi.',
            specs: {
                'Max Capacity': '50 Ton @ 3.0m',
                'Main Boom': '10.7m - 33.3m (4 Sections)',
                'Fly Jib': '8.8m - 13.2m',
                'Steering Modes': '4WD 4-Wheel Steering',
                'Operator SIA': 'Certified SIA Class I'
            }
        },
        {
            id: 'hidromek-mg330',
            name: 'HIDROMEK',
            model: 'MOTOR GRADER MG330 12 TON',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '12 Ton',
            engine: 'Mitsubishi 6D16-T (135 HP)',
            reach: 'Moldboard 3.71 Meter',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.34.35-768x578.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop',
            description: 'Motor Grader Hidromek MG330 12 Ton untuk perataan jalan presisi tinggi (grading), pembuatan sloping, dan pembukaan jalan industri.',
            specs: {
                'Operating Weight': '12,500 kg (12 Ton)',
                'Engine Power': '135 HP',
                'Blade Width': '3,710 mm (12 ft)',
                'Features': 'Front Blade & Rear Scarifier',
                'QHSE': 'Full Maintenance Record & SIA Certified'
            }
        },
        {
            id: 'sakai-sv526tf',
            name: 'SAKAI VIBRATING ROLLER SV526TF',
            model: '12 TON VIBRO ROLLER',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '12 Ton',
            engine: 'Isuzu 4BG1T (123 HP)',
            reach: '2.13m Drum Width',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.43.54-768x576.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
            description: 'Sakai Vibrating Roller SV526TF 12 Ton dengan daya pemadatan amplitudo ganda untuk pemadatan fondasi sub-base jalan tol.',
            specs: {
                'Operating Weight': '12,600 kg (12 Ton)',
                'Centrifugal Force': '260 kN',
                'Vibration Frequency': '33.3 Hz',
                'Drum Type': 'Padfoot & Smooth Shell Capable',
                'Standard': 'K3LH Maintenance Compliant'
            }
        },
        {
            id: 'exca-kobelco-sk210lc',
            name: 'EXCA KOBELCO LONG ARM',
            model: 'SK210LC-10 - 21 TON',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '21 Ton',
            engine: 'Hino J05E-UM (158 HP)',
            reach: '15.8m Extra Digging Reach',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/EXCA-KOBELCO-LONG-ARM-SK210LC-768x578.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1579407364450-481fe19d4b4a?q=80&w=1000&auto=format&fit=crop',
            description: 'Excavator Kobelco SK210LC Long Arm 21 Ton khusus pengerukan alur sungai, pengerukan kedalaman ekstra, dan pembersihan embung.',
            specs: {
                'Operating Weight': '21,200 kg (21 Ton)',
                'Engine': 'Hino J05E 158 HP Euro 4',
                'Max Reach': '15,820 mm (Long Arm)',
                'Max Depth': '12,010 mm',
                'SIA License': 'Certified SIA Operator Attached'
            }
        },
        {
            id: 'komatsu-bulldozer-d85e',
            name: 'KOMATSU BULLDOZER',
            model: 'D85E-SS-2 - 20 TON',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '20 Ton',
            engine: 'Komatsu S6D125E (215 HP)',
            reach: '5.2 m³ Blade Capacity',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/KOMATSU-BULLDOZER-D85E-768x578.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1000&auto=format&fit=crop',
            description: 'Bulldozer Komatsu D85E 20 Ton tangguh untuk land clearing, perataan tanah keras, pengerjaan cut & fill, dan pembukaan jalan proyek.',
            specs: {
                'Operating Weight': '20,670 kg (20 Ton)',
                'Engine Power': '215 HP',
                'Blade Type': 'Semi-U Tilt Blade 5.2 m³',
                'Ripper': '3-Shank Heavy Ripper',
                'Safety': 'Full ROPS Cabin & Operator SIA'
            }
        },
        {
            id: 'gehl-backhoe-gblx920',
            name: 'GEHL BACKHOE LOADER',
            model: 'GBL-X-920 8 TON',
            category: 'versatile',
            categoryName: 'Versatile Fleet',
            capacity: '8 Ton',
            engine: 'Perkins 1104D (92 HP)',
            reach: 'Dual Loader & Digger',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.42.35-768x576.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1000&auto=format&fit=crop',
            description: 'Gehl Backhoe Loader 8 Ton unit 2-in-1 efisien yang menggabungkan loader depan dan ekskavator belakang untuk pekerjaan drainase dan saluran.',
            specs: {
                'Operating Weight': '7,800 kg (8 Ton)',
                'Engine Power': '92 HP Turbocharged',
                'Max Dig Depth': '4,741 mm',
                'Loader Capacity': '1.0 m³',
                'Drive Train': '4WD Heavy Duty Axles'
            }
        },
        {
            id: 'renault-k480',
            name: 'RENAULT',
            model: 'K480 6X6 TRACTOR HEAD',
            category: 'versatile',
            categoryName: 'Versatile Fleet',
            capacity: '60 Ton Transport',
            engine: 'Renault DXi 13 (480 HP)',
            reach: 'Multi-axle Heavy Lowbed',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.10.42-1-768x578.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=1000&auto=format&fit=crop',
            description: 'Tractor Head Renault K480 penggerak 6x6 untuk mobilisasi alat berat skala besar menembus jalan ekstrem dan pertambangan.',
            specs: {
                'Gross Weight': '80,000 kg (80 Ton GCW)',
                'Engine Output': '480 HP / 2,400 Nm Torque',
                'Drive': '6x6 All-Wheel Drive with Lock Differential',
                'Application': 'Mobilization Fleet (Dozer, Excavator, Crane)',
                'Safety': 'Certified Heavy Haulage Escort Ready'
            }
        },
        {
            id: 'crawler-crane-sany-stc550',
            name: 'CRAWLER CRANE',
            model: 'SANY STC550C5 55 TON',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '55 Ton',
            engine: 'Cummins ISLe340 (340 HP)',
            reach: '43.5 Meter Main Boom',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.10.37-768x576.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000&auto=format&fit=crop',
            description: 'Sany STC550C5 55 Ton derek berkemampuan tinggi untuk pengangkatan balok girder, tangki migas, serta instalasi mesin pabrik.',
            specs: {
                'Max Capacity': '55 Ton @ 3.0m',
                'Boom Length': '43.5 Meter U-Shape Boom',
                'Max Lifting Height': '59.5 Meter with Jib',
                'Outrigger Span': '6.0m x 7.2m',
                'SIA License': 'Class I SIA Certified Crane Operator'
            }
        },
        {
            id: 'roughter-crane-tadano-gr500',
            name: 'ROUGHTER CRANE',
            model: 'TADANO GR500EXL 50 TON',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '50 Ton',
            engine: 'Mitsubishi 6M60-TL (267 HP)',
            reach: '33.3m Boom + 13.2m Jib',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.10.35-768x578.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
            description: 'Rough Terrain Crane Tadano GR500EXL 50 Ton serbaguna untuk pengangkatan di proyek kilang minyak, konstruksi gedung, dan jembatan.',
            specs: {
                'Lifting Capacity': '50,000 kg @ 3.0m',
                'Boom Sections': '4 Sections Fully Synchronized',
                'Drive System': '4WD / Crab Steering',
                'Safety Devices': 'AML-C Load Moment Indicator',
                'SIA Operator': 'Fully Certified SIA Class I'
            }
        },
        {
            id: 'zoomlion-zct60',
            name: 'TELESCOPIC CRAWLER CRANE',
            model: 'ZOOMLION ZCT60-0164 60 TON',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '60 Ton',
            engine: 'Weichai WP7 (270 HP)',
            reach: '42 Meter Telescopic Boom',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.10.41-1-768x578.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
            description: 'Zoomlion ZCT60 Telescopic Crawler Crane 60 Ton yang menggabungkan kemampuan boom teleskopik cepat dengan stabilitas rantai crawler.',
            specs: {
                'Lifting Capacity': '60 Ton @ 3.0m',
                'Main Boom': '11.5m - 42.0m',
                'Gradeability': '40% Maximum Slope',
                'Track Width': '4,600 mm Extended',
                'QHSE': 'QHSE Standards & Certified Rigging Team'
            }
        },
        {
            id: 'erection-girder',
            name: 'Erection Girder',
            model: 'LAUNCHING GANTRY & BRIDGING SYSTEM',
            category: 'specialized',
            categoryName: 'Specialized Infrastructure',
            capacity: 'Up to 300 Ton Girder',
            engine: 'Hydraulic Power Pack 150 kW',
            reach: '50 Meter Span',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.11.09-2-768x576.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop',
            description: 'Layanan spesialisasi pemasangan balok girder beton (erection girder) pada proyek jembatan dan elevated highway dengan sistem gantry modern.',
            specs: {
                'Girder Weight Cap.': 'Up to 300 Tons Per Span',
                'Span Range': '30m - 50m Span Length',
                'Hydraulic Control': 'Precision Synchronized Jacking',
                'Standard': 'BMS (Bridge Management System)',
                'Engineering': 'Specialized Bridge Engineers Team'
            }
        },
        {
            id: 'sany-scs1500a',
            name: 'CRAWLER CRANE',
            model: 'SANY SCS1500A 150 TON',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '150 Ton',
            engine: 'Cummins QSL9 (325 HP)',
            reach: '18m - 78m Main Boom',
            image: 'https://www.chas.co.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-20-at-11.10.40-2-768x578.jpeg',
            fallbackImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000&auto=format&fit=crop',
            description: 'Sany SCS1500A 150 Ton Crawler Crane raksasa untuk ereksi girder bentang panjang, pemancangan tiang laut, dan konstruksi energi berat.',
            specs: {
                'Max Lifting Capacity': '150 Ton @ 4.5m',
                'Main Boom Length': '18m - 78m',
                'Fixed Jib': '13m - 31m',
                'Total Counterweight': '54.5 Ton Upper + 14 Ton Carbody',
                'Safety System': 'Load Moment Limiter & High Angle Alarm'
            }
        }
    ];

    // ----------------------------------------------------------------------
    // 2. RENDER EQUIPMENT GRID
    // ----------------------------------------------------------------------
    const equipmentGrid = document.getElementById('equipment-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderEquipment(filter = 'all') {
        if (!equipmentGrid) return;
        
        equipmentGrid.innerHTML = '';
        const filteredData = filter === 'all' 
            ? equipmentCatalog 
            : equipmentCatalog.filter(item => item.category === filter);

        if (filteredData.length === 0) {
            equipmentGrid.innerHTML = `
                <div class="no-equipment-msg text-center" style="grid-column: 1 / -1; padding: 3rem;">
                    <i class="fa-solid fa-truck-monster fa-3x" style="color: var(--clr-gray-300); margin-bottom: 1rem;"></i>
                    <h3>No Units Found</h3>
                    <p>Please select another category.</p>
                </div>
            `;
            return;
        }

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'equipment-card';
            card.setAttribute('data-category', item.category);

            card.innerHTML = `
                <div class="equipment-img-wrapper">
                    <img src="${item.image}" alt="${item.name} ${item.model}" loading="lazy" onerror="this.src='${item.fallbackImage}'">
                    <span class="equipment-tag">${item.categoryName}</span>
                </div>
                <div class="equipment-body">
                    <h3 class="equipment-title">${item.name}</h3>
                    <div class="equipment-model">${item.model}</div>
                    
                    <div class="equipment-specs-mini">
                        <div class="spec-chip"><i class="fa-solid fa-weight-hanging"></i> ${item.capacity}</div>
                        <div class="spec-chip"><i class="fa-solid fa-gauge-high"></i> ${item.engine}</div>
                    </div>

                    <p class="equipment-desc">${item.description}</p>
                    
                    <div class="equipment-actions">
                        <button class="btn btn-outline-primary btn-sm view-spec-btn" data-id="${item.id}">
                            <i class="fa-solid fa-eye"></i> View Specs
                        </button>
                        <button class="btn btn-primary btn-sm rent-this-btn" data-id="${item.id}" data-name="${item.name} - ${item.model}">
                            <i class="fa-solid fa-handshake"></i> Hire Unit
                        </button>
                    </div>
                </div>
            `;
            equipmentGrid.appendChild(card);
        });

        attachEquipmentCardEvents();
    }

    // Filter Buttons Event Setup
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderEquipment(filterValue);
        });
    });

    // Initial render
    renderEquipment('all');

    // ----------------------------------------------------------------------
    // 3. DETAIL MODAL HANDLER (SPECS POPUP & LIGHTBOX)
    // ----------------------------------------------------------------------
    const detailModal = document.getElementById('detail-modal');
    const detailModalContent = document.getElementById('detail-modal-content');
    const closeDetailModalBtn = document.getElementById('close-detail-modal-btn');

    function openEquipmentDetail(itemId) {
        const item = equipmentCatalog.find(e => e.id === itemId);
        if (!item || !detailModal || !detailModalContent) return;

        let specsRowsHtml = '';
        for (const [key, val] of Object.entries(item.specs)) {
            specsRowsHtml += `
                <tr>
                    <td class="spec-key"><strong>${key}</strong></td>
                    <td class="spec-val">${val}</td>
                </tr>
            `;
        }

        detailModalContent.innerHTML = `
            <div class="modal-detail-wrapper">
                <div class="modal-detail-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallbackImage}'">
                    <div class="modal-detail-badge">${item.categoryName}</div>
                </div>
                <div class="modal-detail-info">
                    <h2 class="modal-detail-title">${item.name}</h2>
                    <p class="modal-detail-subtitle">${item.model} — Technical Specifications</p>
                    <p class="modal-detail-desc">${item.description}</p>
                    
                    <h4 class="specs-table-title"><i class="fa-solid fa-list-check"></i> Technical Specs Sheet</h4>
                    <table class="specs-table">
                        <tbody>
                            ${specsRowsHtml}
                        </tbody>
                    </table>

                    <div class="modal-detail-cta">
                        <button class="btn btn-accent btn-lg w-full rent-from-detail-btn" data-id="${item.id}" data-name="${item.name} - ${item.model}">
                            <i class="fa-solid fa-paper-plane"></i> Request Quotation For This Unit
                        </button>
                    </div>
                </div>
            </div>
        `;

        detailModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const rentFromDetailBtn = detailModalContent.querySelector('.rent-from-detail-btn');
        if (rentFromDetailBtn) {
            rentFromDetailBtn.addEventListener('click', () => {
                const eqName = rentFromDetailBtn.getAttribute('data-name');
                closeDetailModal();
                openQuotationModalWithUnit(eqName);
            });
        }
    }

    function closeDetailModal() {
        if (detailModal) {
            detailModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (closeDetailModalBtn) {
        closeDetailModalBtn.addEventListener('click', closeDetailModal);
    }

    if (detailModal) {
        detailModal.addEventListener('click', (e) => {
            if (e.target === detailModal) {
                closeDetailModal();
            }
        });
    }

    function attachEquipmentCardEvents() {
        document.querySelectorAll('.view-spec-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.getAttribute('data-id');
                openEquipmentDetail(itemId);
            });
        });

        document.querySelectorAll('.rent-this-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const eqName = btn.getAttribute('data-name');
                openQuotationModalWithUnit(eqName);
            });
        });
    }

    // ----------------------------------------------------------------------
    // 4. QUOTATION MODAL & WHATSAPP GENERATOR
    // ----------------------------------------------------------------------
    const quoteModal = document.getElementById('quote-modal');
    const openQuoteBtns = document.querySelectorAll('.open-quote-modal');
    const closeQuoteBtn = document.getElementById('close-modal-btn');
    const quoteForm = document.getElementById('quote-form');
    const equipmentSelect = document.getElementById('equipment-select');

    function openQuotationModal() {
        if (quoteModal) {
            quoteModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeQuotationModal() {
        if (quoteModal) {
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function openQuotationModalWithUnit(unitName) {
        openQuotationModal();
        if (equipmentSelect && unitName) {
            let matchedOption = Array.from(equipmentSelect.options).find(opt => 
                opt.text.toLowerCase().includes(unitName.toLowerCase()) || 
                unitName.toLowerCase().includes(opt.value.toLowerCase())
            );
            if (matchedOption) {
                equipmentSelect.value = matchedOption.value;
            } else {
                let customOpt = document.createElement('option');
                customOpt.value = unitName;
                customOpt.text = unitName;
                customOpt.selected = true;
                equipmentSelect.appendChild(customOpt);
            }
        }
    }

    openQuoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openQuotationModal();
        });
    });

    if (closeQuoteBtn) {
        closeQuoteBtn.addEventListener('click', closeQuotationModal);
    }

    if (quoteModal) {
        quoteModal.addEventListener('click', (e) => {
            if (e.target === quoteModal) {
                closeQuotationModal();
            }
        });
    }

    // Toast Notification System
    function showToast(message, type = 'success') {
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check toast-icon"></i>
            <div class="toast-message">${message}</div>
            <button class="toast-close">&times;</button>
        `;

        toastContainer.appendChild(toast);

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toast.classList.add('toast-fadeout');
            setTimeout(() => toast.remove(), 300);
        });

        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.add('toast-fadeout');
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);
    }

    // WhatsApp Direct Submission
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('client-name')?.value || 'Prospective Client';
            const email = document.getElementById('client-email')?.value || '-';
            const phone = document.getElementById('client-phone')?.value || '-';
            const unit = equipmentSelect?.options[equipmentSelect.selectedIndex]?.text || 'General Equipment Inquiry';
            const duration = document.getElementById('rental-duration')?.value || 'Monthly Contract';
            const notes = document.getElementById('project-location')?.value || 'No specific location specified.';

            const targetPhone = '6281286439717'; // Official PT Karya Cipta Setiawan WhatsApp
            
            const message = 
`*PERMINTAAN PENAWARAN HARGA (QUOTATION) - PT KARYA CIPTA SETIAWAN*
=========================================
*Nama / Perusahaan:* ${name}
*Email:* ${email}
*Telepon/WA:* ${phone}
-----------------------------------------
*Layanan / Unit Alat:* ${unit}
*Durasi / Jenis Kontrak:* ${duration}
*Lokasi & Detail Proyek:* 
${notes}
=========================================
_Dikirim via Website Profile PT KARYA CIPTA SETIAWAN_`;

            const encodedMsg = encodeURIComponent(message);
            const waUrl = `https://wa.me/${targetPhone}?text=${encodedMsg}`;

            showToast('Quotation Request Prepared! Opening WhatsApp...', 'success');
            closeQuotationModal();
            
            setTimeout(() => {
                window.open(waUrl, '_blank');
                quoteForm.reset();
            }, 600);
        });
    }

    // ----------------------------------------------------------------------
    // 5. ANIMATED NUMERIC COUNTER (Trust Metrics)
    // ----------------------------------------------------------------------
    const counterElements = document.querySelectorAll('.counter-number, .stat-num');
    let animated = false;

    function animateCounters() {
        if (animated) return;

        counterElements.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // ms
                const stepTime = 30;
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.innerText = target + '+';
                        clearInterval(timer);
                    } else {
                        counter.innerText = Math.ceil(current);
                    }
                }, stepTime);

                animated = true;
            }
        });
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Run check on load

    // ----------------------------------------------------------------------
    // 6. STICKY HEADER & MOBILE NAVIGATION DRAWER
    // ----------------------------------------------------------------------
    const siteHeader = document.getElementById('site-header');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader?.classList.add('scrolled');
        } else {
            siteHeader?.classList.remove('scrolled');
        }
    });

    function toggleMobileMenu() {
        hamburgerBtn?.classList.toggle('active');
        navMenu?.classList.toggle('active');
        mobileOverlay?.classList.toggle('active');
        document.body.style.overflow = navMenu?.classList.contains('active') ? 'hidden' : '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu?.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // ----------------------------------------------------------------------
    // 7. SCROLL TO TOP BUTTON
    // ----------------------------------------------------------------------
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});