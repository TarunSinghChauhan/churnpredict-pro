// Customer Churn Prediction Dashboard - Advanced Business Intelligence Platform

// Application Data
const appData = {
  overview_metrics: {
    total_customers: 5247,
    active_customers: 4892,
    churn_rate: 22.8,
    monthly_churn: 195,
    revenue_at_risk: 127500,
    monthly_revenue: 892340,
    avg_customer_value: 182.45,
    retention_rate: 77.2,
    prediction_accuracy: 89.6,
    campaigns_active: 7
  },
  customers: [
    {
      "id": "CUST_00001",
      "name": "Sarah Johnson",
      "email": "sarah.j@email.com",
      "age": 34,
      "tenure": 28,
      "monthly_charges": 159.99,
      "total_charges": 4479.72,
      "churn_probability": 0.89,
      "risk_level": "Critical",
      "segment": "Premium",
      "contract": "Month-to-month",
      "last_login": "2025-09-01",
      "support_tickets": 8,
      "satisfaction": 2.1,
      "engagement_score": 3.2
    },
    {
      "id": "CUST_00002",
      "name": "Michael Chen",
      "email": "m.chen@email.com",
      "age": 42,
      "tenure": 48,
      "monthly_charges": 89.50,
      "total_charges": 4296.00,
      "churn_probability": 0.23,
      "risk_level": "Low",
      "segment": "Loyal",
      "contract": "Two year",
      "last_login": "2025-09-06",
      "support_tickets": 1,
      "satisfaction": 4.7,
      "engagement_score": 8.9
    },
    {
      "id": "CUST_00003",
      "name": "Emily Rodriguez",
      "email": "e.rodriguez@email.com",
      "age": 29,
      "tenure": 14,
      "monthly_charges": 124.75,
      "total_charges": 1746.50,
      "churn_probability": 0.67,
      "risk_level": "High",
      "segment": "Growth",
      "contract": "Month-to-month",
      "last_login": "2025-08-28",
      "support_tickets": 4,
      "satisfaction": 3.1,
      "engagement_score": 4.8
    },
    {
      "id": "CUST_00004",
      "name": "David Thompson",
      "email": "d.thompson@email.com",
      "age": 55,
      "tenure": 72,
      "monthly_charges": 95.30,
      "total_charges": 6861.60,
      "churn_probability": 0.15,
      "risk_level": "Low",
      "segment": "Champion",
      "contract": "Two year",
      "last_login": "2025-09-07",
      "support_tickets": 0,
      "satisfaction": 4.9,
      "engagement_score": 9.2
    },
    {
      "id": "CUST_00005",
      "name": "Lisa Wang",
      "email": "l.wang@email.com",
      "age": 38,
      "tenure": 6,
      "monthly_charges": 199.99,
      "total_charges": 1199.94,
      "churn_probability": 0.78,
      "risk_level": "Critical",
      "segment": "New Premium",
      "contract": "Month-to-month",
      "last_login": "2025-08-15",
      "support_tickets": 6,
      "satisfaction": 2.8,
      "engagement_score": 2.1
    },
    {
      "id": "CUST_00006",
      "name": "Robert Garcia",
      "email": "r.garcia@email.com",
      "age": 46,
      "tenure": 36,
      "monthly_charges": 78.90,
      "total_charges": 2840.40,
      "churn_probability": 0.41,
      "risk_level": "Medium",
      "segment": "Standard",
      "contract": "One year",
      "last_login": "2025-09-05",
      "support_tickets": 2,
      "satisfaction": 4.2,
      "engagement_score": 6.7
    }
  ],
  monthly_trends: [
    {"month": "Mar 2025", "revenue": 856000, "customers": 5100, "churn_rate": 24.5, "new_customers": 142, "lost_customers": 118},
    {"month": "Apr 2025", "revenue": 871200, "customers": 5180, "churn_rate": 23.8, "new_customers": 158, "lost_customers": 98},
    {"month": "May 2025", "revenue": 884300, "customers": 5220, "churn_rate": 23.2, "new_customers": 167, "lost_customers": 89},
    {"month": "Jun 2025", "revenue": 889700, "customers": 5235, "churn_rate": 22.9, "new_customers": 145, "lost_customers": 92},
    {"month": "Jul 2025", "revenue": 891500, "customers": 5241, "churn_rate": 22.6, "new_customers": 139, "lost_customers": 84},
    {"month": "Aug 2025", "revenue": 892340, "customers": 5247, "churn_rate": 22.8, "new_customers": 156, "lost_customers": 87}
  ],
  risk_distribution: [
    {"level": "Low Risk", "count": 2544, "percentage": 48.5, "color": "#1FB8CD", "description": "Probability < 30%"},
    {"level": "Medium Risk", "count": 1589, "percentage": 30.3, "color": "#FFC185", "description": "Probability 30-70%"},
    {"level": "High Risk", "count": 856, "percentage": 16.3, "color": "#B4413C", "description": "Probability 70-85%"},
    {"level": "Critical Risk", "count": 258, "percentage": 4.9, "color": "#DC2626", "description": "Probability > 85%"}
  ],
  segment_analysis: [
    {"segment": "Champion", "customers": 1247, "churn_rate": 8.3, "avg_revenue": 145.20, "lifetime_value": 3240, "color": "#1FB8CD"},
    {"segment": "Loyal", "customers": 1456, "churn_rate": 12.7, "avg_revenue": 98.50, "lifetime_value": 2890, "color": "#5D878F"},
    {"segment": "Premium", "customers": 892, "churn_rate": 31.4, "avg_revenue": 185.75, "lifetime_value": 2150, "color": "#FFC185"},
    {"segment": "Growth", "customers": 987, "churn_rate": 28.9, "avg_revenue": 124.30, "lifetime_value": 1980, "color": "#964325"},
    {"segment": "Standard", "customers": 1435, "churn_rate": 22.1, "avg_revenue": 89.90, "lifetime_value": 2340, "color": "#944454"},
    {"segment": "New Premium", "customers": 230, "churn_rate": 52.6, "avg_revenue": 195.45, "lifetime_value": 890, "color": "#B4413C"}
  ],
  feature_importance: [
    {"feature": "Monthly Charges", "importance": 0.247, "impact": "High", "description": "Primary pricing factor"},
    {"feature": "Tenure", "importance": 0.189, "impact": "High", "description": "Customer relationship length"},
    {"feature": "Support Tickets", "importance": 0.156, "impact": "Medium", "description": "Service satisfaction indicator"},
    {"feature": "Contract Type", "importance": 0.134, "impact": "Medium", "description": "Commitment level"},
    {"feature": "Satisfaction Score", "importance": 0.128, "impact": "Medium", "description": "Customer happiness rating"},
    {"feature": "Engagement Score", "importance": 0.087, "impact": "Low", "description": "Platform usage activity"},
    {"feature": "Total Charges", "importance": 0.059, "impact": "Low", "description": "Historical spend"}
  ],
  predictions_history: [
    {"date": "2025-09-07", "predictions_made": 47, "accuracy": 89.6, "high_risk_identified": 12, "actions_taken": 8},
    {"date": "2025-09-06", "predictions_made": 52, "accuracy": 91.2, "high_risk_identified": 15, "actions_taken": 11},
    {"date": "2025-09-05", "predictions_made": 38, "accuracy": 88.7, "high_risk_identified": 9, "actions_taken": 7},
    {"date": "2025-09-04", "predictions_made": 41, "accuracy": 90.3, "high_risk_identified": 11, "actions_taken": 9}
  ]
};

// Global Variables
let charts = {};
let filteredCustomers = [...appData.customers];
let currentTheme = 'light';

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing ChurnPredict Pro Dashboard...');
  
  showLoading();
  
  setTimeout(() => {
    initializeNavigation();
    initializeKPIAnimations();
    initializeCharts();
    initializeCustomerTable();
    initializeFilters();
    initializePredictionForm();
    initializeThemeToggle();
    initializeGlobalSearch();
    initializeHighRiskAlerts();
    initializeDataRefresh();
    
    hideLoading();
    
    // Show welcome animation
    setTimeout(() => {
      showNotification('Welcome to ChurnPredict Pro! 🎯', 'success');
    }, 500);
  }, 1500);
});

// Navigation System - FIXED
function initializeNavigation() {
  console.log('Initializing navigation system...');
  
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  console.log('Found nav links:', navLinks.length);
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('data-section');
      console.log('Navigation clicked:', targetSection);
      
      if (targetSection) {
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show target section
        showSection(targetSection);
        
        // Update URL hash
        window.location.hash = targetSection;
      }
    });
  });
  
  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      showSection(hash);
      const activeLink = document.querySelector(`[data-section="${hash}"]`);
      if (activeLink) {
        navLinks.forEach(l => l.classList.remove('active'));
        activeLink.classList.add('active');
      }
    }
  });
  
  // Initialize with dashboard or hash
  const initialSection = window.location.hash.substring(1) || 'dashboard';
  showSection(initialSection);
  
  // Activate the correct nav link
  const initialLink = document.querySelector(`[data-section="${initialSection}"]`);
  if (initialLink) {
    navLinks.forEach(l => l.classList.remove('active'));
    initialLink.classList.add('active');
  }
}

function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  const sections = document.querySelectorAll('.section');
  
  // Hide all sections first
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });
  
  // Show target section with delay for animation
  setTimeout(() => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
      targetSection.classList.add('active');
      console.log('Section shown:', sectionId);
      
      // Refresh charts if needed
      if (sectionId === 'analytics' || sectionId === 'dashboard') {
        setTimeout(refreshChartsInSection, 300);
      }
    } else {
      console.error('Section not found:', sectionId);
    }
  }, 50);
}

// KPI Animations
function initializeKPIAnimations() {
  const kpiCards = document.querySelectorAll('.kpi-value[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateKPIValue(entry.target);
      }
    });
  });
  
  kpiCards.forEach(card => observer.observe(card));
}

function animateKPIValue(element) {
  const target = parseFloat(element.getAttribute('data-count'));
  const isMoney = element.classList.contains('money');
  const isPercentage = element.textContent.includes('%');
  
  let current = 0;
  const increment = target / 100;
  const duration = 2000;
  const stepTime = duration / 100;
  
  const timer = setInterval(() => {
    current += increment;
    
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (isMoney) {
      element.textContent = `$${Math.floor(current).toLocaleString()}`;
    } else if (isPercentage) {
      element.textContent = current.toFixed(1);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, stepTime);
}

// Chart Initialization
function initializeCharts() {
  if (typeof Chart === 'undefined') {
    console.error('Chart.js not loaded');
    setTimeout(initializeCharts, 500);
    return;
  }
  
  console.log('Initializing charts...');
  
  // Set default chart options
  Chart.defaults.font.family = 'var(--font-family-base)';
  Chart.defaults.color = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
  
  createRiskDistributionChart();
  createMonthlyTrendsChart();
  createSegmentChart();
  createFeatureImportanceChart();
  createLifetimeValueChart();
  createPredictionHistoryChart();
  
  // Initialize chart controls
  initializeChartControls();
}

function createRiskDistributionChart() {
  const canvas = document.getElementById('riskDistributionChart');
  if (!canvas) {
    console.log('Risk distribution chart canvas not found');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  
  charts.riskDistribution = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: appData.risk_distribution.map(item => item.level),
      datasets: [{
        data: appData.risk_distribution.map(item => item.percentage),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#DC2626'],
        borderWidth: 0,
        cutout: '65%'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            font: {
              size: 12,
              weight: '500'
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const item = appData.risk_distribution[context.dataIndex];
              return `${item.level}: ${item.percentage}% (${item.count.toLocaleString()} customers)`;
            }
          }
        }
      },
      animation: {
        animateRotate: true,
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function createMonthlyTrendsChart() {
  const canvas = document.getElementById('monthlyTrendsChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts.monthlyTrends = new Chart(ctx, {
    type: 'line',
    data: {
      labels: appData.monthly_trends.map(item => item.month.split(' ')[0]),
      datasets: [{
        label: 'Churn Rate (%)',
        data: appData.monthly_trends.map(item => item.churn_rate),
        borderColor: '#B4413C',
        backgroundColor: 'rgba(180, 65, 60, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#B4413C',
        pointBorderWidth: 3,
        pointBorderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: '#1FB8CD',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 12,
              weight: '500'
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function createSegmentChart() {
  const canvas = document.getElementById('segmentChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts.segment = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: appData.segment_analysis.map(item => item.segment),
      datasets: [
        {
          label: 'Customers',
          data: appData.segment_analysis.map(item => item.customers),
          backgroundColor: appData.segment_analysis.map(item => item.color),
          borderRadius: 8,
          borderSkipped: false,
          yAxisID: 'y'
        },
        {
          label: 'Churn Rate (%)',
          data: appData.segment_analysis.map(item => item.churn_rate),
          type: 'line',
          borderColor: '#DC2626',
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: '#DC2626',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff'
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Number of Customers'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Churn Rate (%)'
          },
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function createFeatureImportanceChart() {
  const canvas = document.getElementById('featureImportanceChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts.featureImportance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: appData.feature_importance.map(item => item.feature),
      datasets: [{
        label: 'Feature Importance',
        data: appData.feature_importance.map(item => item.importance),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'],
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const item = appData.feature_importance[context.dataIndex];
              return `${item.feature}: ${(item.importance * 100).toFixed(1)}%`;
            },
            afterLabel: function(context) {
              const item = appData.feature_importance[context.dataIndex];
              return item.description;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 0.3,
          title: {
            display: true,
            text: 'Importance Score'
          },
          ticks: {
            callback: function(value) {
              return (value * 100).toFixed(0) + '%';
            }
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function createLifetimeValueChart() {
  const canvas = document.getElementById('lifetimeValueChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts.lifetimeValue = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: appData.segment_analysis.map(segment => ({
        label: segment.segment,
        data: [{
          x: segment.churn_rate,
          y: segment.avg_revenue,
          r: Math.sqrt(segment.customers) / 3
        }],
        backgroundColor: segment.color + '80',
        borderColor: segment.color,
        borderWidth: 2
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const segment = appData.segment_analysis[context.datasetIndex];
              return [
                `Segment: ${segment.segment}`,
                `Customers: ${segment.customers.toLocaleString()}`,
                `Churn Rate: ${segment.churn_rate}%`,
                `Avg Revenue: $${segment.avg_revenue}`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Churn Rate (%)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Average Revenue ($)'
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function createPredictionHistoryChart() {
  const canvas = document.getElementById('predictionHistoryChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  charts.predictionHistory = new Chart(ctx, {
    type: 'line',
    data: {
      labels: appData.predictions_history.map(item => new Date(item.date).toLocaleDateString()),
      datasets: [
        {
          label: 'Accuracy (%)',
          data: appData.predictions_history.map(item => item.accuracy),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true,
          yAxisID: 'y'
        },
        {
          label: 'Predictions Made',
          data: appData.predictions_history.map(item => item.predictions_made),
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.1)',
          tension: 0.4,
          fill: false,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Accuracy (%)'
          },
          min: 85,
          max: 95
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Predictions Made'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

// Chart Controls
function initializeChartControls() {
  const trendMetricSelect = document.getElementById('trendMetric');
  const segmentViewToggle = document.getElementById('segmentViewToggle');
  
  if (trendMetricSelect) {
    trendMetricSelect.addEventListener('change', updateMonthlyTrends);
  }
  
  if (segmentViewToggle) {
    segmentViewToggle.addEventListener('click', toggleSegmentView);
  }
}

function updateMonthlyTrends() {
  const metric = document.getElementById('trendMetric').value;
  let data, label, color;
  
  switch(metric) {
    case 'revenue':
      data = appData.monthly_trends.map(item => item.revenue / 1000);
      label = 'Revenue ($K)';
      color = '#1FB8CD';
      break;
    case 'customers':
      data = appData.monthly_trends.map(item => item.new_customers);
      label = 'New Customers';
      color = '#FFC185';
      break;
    default:
      data = appData.monthly_trends.map(item => item.churn_rate);
      label = 'Churn Rate (%)';
      color = '#B4413C';
  }
  
  if (charts.monthlyTrends) {
    charts.monthlyTrends.data.datasets[0].data = data;
    charts.monthlyTrends.data.datasets[0].label = label;
    charts.monthlyTrends.data.datasets[0].borderColor = color;
    charts.monthlyTrends.data.datasets[0].backgroundColor = color + '20';
    charts.monthlyTrends.data.datasets[0].pointBackgroundColor = color;
    charts.monthlyTrends.update('active');
  }
}

function toggleSegmentView() {
  // Toggle between bar chart and radar chart
  if (charts.segment && charts.segment.config.type === 'bar') {
    // Switch to radar chart
    charts.segment.config.type = 'radar';
    charts.segment.data.datasets = [{
      label: 'Churn Rate (%)',
      data: appData.segment_analysis.map(item => item.churn_rate),
      backgroundColor: 'rgba(31, 184, 205, 0.2)',
      borderColor: '#1FB8CD',
      pointBackgroundColor: '#1FB8CD',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2
    }];
    charts.segment.options.scales = {
      r: {
        beginAtZero: true,
        max: 60
      }
    };
  } else {
    // Switch back to bar chart
    createSegmentChart();
    return;
  }
  
  charts.segment.update('active');
}

// Customer Table Management
function initializeCustomerTable() {
  renderCustomerTable();
  updateRecordCount();
}

function renderCustomerTable() {
  const tableBody = document.getElementById('customersTableBody');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  if (filteredCustomers.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td colspan="8" style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
        <i class="fas fa-search" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>
        No customers found matching your filters
      </td>
    `;
    tableBody.appendChild(row);
    return;
  }
  
  filteredCustomers.forEach(customer => {
    const row = document.createElement('tr');
    const initials = customer.name.split(' ').map(n => n[0]).join('');
    
    row.innerHTML = `
      <td>
        <div class="customer-info">
          <div class="customer-avatar">${initials}</div>
          <div class="customer-details">
            <h4>${customer.name}</h4>
            <p>${customer.id}</p>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div>${customer.email}</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Age: ${customer.age}</div>
        </div>
      </td>
      <td>${customer.tenure} months</td>
      <td>$${customer.monthly_charges.toFixed(2)}</td>
      <td>
        <div class="risk-badge ${customer.risk_level.toLowerCase().replace(' ', '-')}">
          ${customer.risk_level}
          <div style="font-size: 10px;">${(customer.churn_probability * 100).toFixed(1)}%</div>
        </div>
      </td>
      <td><span class="segment-badge">${customer.segment}</span></td>
      <td>${new Date(customer.last_login).toLocaleDateString()}</td>
      <td>
        <div class="action-buttons">
          <button class="action-btn view" onclick="viewCustomer('${customer.id}')" title="View Details">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn edit" onclick="editCustomer('${customer.id}')" title="Edit Customer">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

function updateRecordCount() {
  const recordCountEl = document.getElementById('recordCount');
  if (recordCountEl) {
    recordCountEl.textContent = `${filteredCustomers.length} customer${filteredCustomers.length !== 1 ? 's' : ''}`;
  }
}

// Filter System - FIXED
function initializeFilters() {
  const riskFilter = document.getElementById('riskFilter');
  const segmentFilter = document.getElementById('segmentFilter');
  const contractFilter = document.getElementById('contractFilter');
  const searchFilter = document.getElementById('customerSearch');
  
  // Add event listeners with proper handling
  if (riskFilter) {
    riskFilter.addEventListener('change', applyFilters);
    console.log('Risk filter initialized');
  }
  
  if (segmentFilter) {
    segmentFilter.addEventListener('change', applyFilters);
    console.log('Segment filter initialized');
  }
  
  if (contractFilter) {
    contractFilter.addEventListener('change', applyFilters);
    console.log('Contract filter initialized');
  }
  
  if (searchFilter) {
    searchFilter.addEventListener('input', debounce(applyFilters, 300));
    console.log('Search filter initialized');
  }
}

function applyFilters() {
  console.log('Applying filters...');
  
  const riskFilter = document.getElementById('riskFilter')?.value || '';
  const segmentFilter = document.getElementById('segmentFilter')?.value || '';
  const contractFilter = document.getElementById('contractFilter')?.value || '';
  const searchFilter = document.getElementById('customerSearch')?.value.toLowerCase() || '';
  
  filteredCustomers = appData.customers.filter(customer => {
    const matchesRisk = !riskFilter || customer.risk_level === riskFilter;
    const matchesSegment = !segmentFilter || customer.segment === segmentFilter;
    const matchesContract = !contractFilter || customer.contract === contractFilter;
    const matchesSearch = !searchFilter || 
      customer.name.toLowerCase().includes(searchFilter) ||
      customer.email.toLowerCase().includes(searchFilter) ||
      customer.id.toLowerCase().includes(searchFilter);
    
    return matchesRisk && matchesSegment && matchesContract && matchesSearch;
  });
  
  console.log(`Filtered to ${filteredCustomers.length} customers`);
  
  renderCustomerTable();
  updateRecordCount();
}

// Prediction System
function initializePredictionForm() {
  const form = document.getElementById('predictionForm');
  if (form) {
    form.addEventListener('submit', handlePredictionSubmit);
  }
}

function handlePredictionSubmit(e) {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const btnLoader = submitBtn.querySelector('.btn-loader');
  
  // Show loading state
  submitBtn.disabled = true;
  if (btnLoader) btnLoader.classList.remove('hidden');
  
  showLoading();
  
  // Collect form data
  const formData = {
    name: document.getElementById('customerName').value,
    age: parseInt(document.getElementById('customerAge').value),
    tenure: parseInt(document.getElementById('customerTenure').value),
    monthlyCharges: parseFloat(document.getElementById('monthlyCharges').value),
    contractType: document.getElementById('contractType').value,
    supportTickets: parseInt(document.getElementById('supportTickets').value) || 0
  };
  
  // Simulate AI prediction with realistic delay
  setTimeout(() => {
    const prediction = calculateChurnProbability(formData);
    displayPredictionResults(prediction, formData);
    
    // Reset form state
    submitBtn.disabled = false;
    if (btnLoader) btnLoader.classList.add('hidden');
    hideLoading();
    
    // Show success notification
    showNotification('Prediction completed successfully! 🎯', 'success');
  }, 2500);
}

function calculateChurnProbability(data) {
  // Advanced prediction algorithm based on multiple factors
  let probability = 0.4; // Base probability
  
  // Contract type influence (strongest predictor)
  if (data.contractType === 'Month-to-month') {
    probability += 0.3;
  } else if (data.contractType === 'One year') {
    probability += 0.1;
  } else if (data.contractType === 'Two year') {
    probability -= 0.2;
  }
  
  // Tenure influence
  if (data.tenure < 6) {
    probability += 0.25;
  } else if (data.tenure < 12) {
    probability += 0.15;
  } else if (data.tenure > 36) {
    probability -= 0.15;
  }
  
  // Monthly charges influence
  if (data.monthlyCharges > 150) {
    probability += 0.1;
  } else if (data.monthlyCharges < 50) {
    probability += 0.05;
  }
  
  // Support tickets influence
  if (data.supportTickets > 5) {
    probability += 0.2;
  } else if (data.supportTickets > 2) {
    probability += 0.1;
  }
  
  // Age influence (minor factor)
  if (data.age < 25 || data.age > 65) {
    probability += 0.05;
  }
  
  // Add some randomness and ensure realistic bounds
  probability += (Math.random() - 0.5) * 0.1;
  probability = Math.max(0.05, Math.min(0.95, probability));
  
  return probability;
}

function displayPredictionResults(probability, customerData) {
  const percentage = (probability * 100).toFixed(1);
  
  // Determine risk level and recommendations
  let riskLevel, riskClass, recommendation, revenueImpact, retentionStrategy;
  
  if (probability < 0.3) {
    riskLevel = 'Low Risk';
    riskClass = 'low';
    recommendation = 'Maintain current service level';
    revenueImpact = 'Minimal impact expected';
    retentionStrategy = 'Standard engagement';
  } else if (probability < 0.5) {
    riskLevel = 'Medium Risk';
    riskClass = 'medium';
    recommendation = 'Monitor closely, consider engagement campaign';
    revenueImpact = `$${(customerData.monthlyCharges * 6).toFixed(0)} at risk`;
    retentionStrategy = 'Personalized offers';
  } else if (probability < 0.7) {
    riskLevel = 'High Risk';
    riskClass = 'high';
    recommendation = 'Immediate retention campaign required';
    revenueImpact = `$${(customerData.monthlyCharges * 12).toFixed(0)} at risk`;
    retentionStrategy = 'Urgent intervention needed';
  } else {
    riskLevel = 'Critical Risk';
    riskClass = 'critical';
    recommendation = 'Priority intervention - assign account manager';
    revenueImpact = `$${(customerData.monthlyCharges * 18).toFixed(0)} at risk`;
    retentionStrategy = 'Executive escalation';
  }
  
  // Update gauge
  const riskGauge = document.getElementById('riskGauge');
  const gaugeValue = document.querySelector('.gauge-value');
  
  if (riskGauge && gaugeValue) {
    const colors = {
      low: '#1FB8CD',
      medium: '#FFC185',
      high: '#B4413C',
      critical: '#DC2626'
    };
    
    riskGauge.style.background = `conic-gradient(${colors[riskClass]} ${percentage * 3.6}deg, var(--color-secondary) 0deg)`;
    gaugeValue.textContent = percentage;
  }
  
  // Update risk level indicator
  const riskIndicator = document.getElementById('riskLevelIndicator');
  if (riskIndicator) {
    riskIndicator.innerHTML = `<span class="risk-level-text risk-${riskClass}">${riskLevel}</span>`;
  }
  
  // Update confidence badge
  const confidenceBadge = document.getElementById('confidenceBadge');
  if (confidenceBadge) {
    const confidence = (88 + Math.random() * 8).toFixed(1);
    confidenceBadge.innerHTML = `
      <span class="confidence-value">${confidence}%</span>
      <span class="confidence-label">Confidence</span>
    `;
  }
  
  // Update prediction details
  const recommendedAction = document.getElementById('recommendedAction');
  const revenueImpactEl = document.getElementById('revenueImpact');
  const retentionStrategyEl = document.getElementById('retentionStrategy');
  
  if (recommendedAction) recommendedAction.textContent = recommendation;
  if (revenueImpactEl) revenueImpactEl.textContent = revenueImpact;
  if (retentionStrategyEl) retentionStrategyEl.textContent = retentionStrategy;
  
  // Animate the results
  const resultsCard = document.querySelector('.prediction-results-card');
  if (resultsCard) {
    resultsCard.style.transform = 'scale(0.98)';
    setTimeout(() => {
      resultsCard.style.transform = 'scale(1)';
    }, 100);
  }
}

// High Risk Alerts
function initializeHighRiskAlerts() {
  const highRiskCustomers = appData.customers.filter(c => c.risk_level === 'High' || c.risk_level === 'Critical');
  const alertsList = document.getElementById('highRiskAlerts');
  
  if (!alertsList) return;
  
  alertsList.innerHTML = '';
  
  highRiskCustomers.slice(0, 5).forEach(customer => {
    const alertItem = document.createElement('div');
    alertItem.className = 'alert-item';
    alertItem.innerHTML = `
      <div class="alert-icon">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
      <div class="alert-content">
        <h4>${customer.name}</h4>
        <p>${customer.risk_level} - ${(customer.churn_probability * 100).toFixed(1)}% churn probability</p>
      </div>
    `;
    
    alertItem.addEventListener('click', () => viewCustomer(customer.id));
    alertsList.appendChild(alertItem);
  });
}

// Theme System
function initializeThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  const icon = themeToggle.querySelector('i');
  
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    
    // Update icon with animation
    if (icon) {
      icon.style.transform = 'rotate(180deg)';
      setTimeout(() => {
        icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        icon.style.transform = 'rotate(0deg)';
      }, 150);
    }
    
    // Update charts for new theme
    setTimeout(refreshChartsInSection, 200);
    
    showNotification(`Switched to ${currentTheme} theme! 🌙`, 'info');
  });
}

// Global Search
function initializeGlobalSearch() {
  const globalSearch = document.getElementById('globalSearch');
  if (!globalSearch) return;
  
  globalSearch.addEventListener('input', debounce((e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm.length > 2) {
      // Switch to customers section
      showSection('customers');
      const customerLink = document.querySelector('[data-section="customers"]');
      if (customerLink) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        customerLink.classList.add('active');
      }
      
      // Apply search in customer filters
      const customerSearch = document.getElementById('customerSearch');
      if (customerSearch) {
        customerSearch.value = searchTerm;
        applyFilters();
      }
    }
  }, 300));
}

// Data Refresh
function initializeDataRefresh() {
  const refreshBtn = document.getElementById('refreshData');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', refreshDashboardData);
  }
}

function refreshDashboardData() {
  const refreshBtn = document.getElementById('refreshData');
  const icon = refreshBtn.querySelector('i');
  
  // Animate refresh icon
  if (icon) icon.classList.add('fa-spin');
  refreshBtn.disabled = true;
  
  showLoading();
  
  setTimeout(() => {
    // Simulate data refresh
    initializeKPIAnimations();
    refreshChartsInSection();
    initializeHighRiskAlerts();
    
    // Reset button state
    if (icon) icon.classList.remove('fa-spin');
    refreshBtn.disabled = false;
    hideLoading();
    
    showNotification('Dashboard data refreshed! 📊', 'success');
  }, 2000);
}

// Customer Actions
function viewCustomer(customerId) {
  const customer = appData.customers.find(c => c.id === customerId);
  if (!customer) return;
  
  const modal = document.getElementById('customerModal');
  const modalBody = document.getElementById('customerModalBody');
  
  if (!modal || !modalBody) return;
  
  modalBody.innerHTML = `
    <div class="customer-profile">
      <div class="profile-header">
        <div class="customer-avatar large" style="width: 60px; height: 60px; font-size: 24px;">${customer.name.split(' ').map(n => n[0]).join('')}</div>
        <div class="profile-info">
          <h2>${customer.name}</h2>
          <p>${customer.email}</p>
          <div class="risk-badge ${customer.risk_level.toLowerCase().replace(' ', '-')}">${customer.risk_level}</div>
        </div>
      </div>
      
      <div class="profile-metrics" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
        <div class="metric-card" style="padding: 16px; background: var(--color-secondary); border-radius: 8px; text-align: center;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--color-text-secondary);">Churn Probability</h4>
          <div class="metric-value" style="font-size: 24px; font-weight: bold; color: var(--color-error);">${(customer.churn_probability * 100).toFixed(1)}%</div>
        </div>
        <div class="metric-card" style="padding: 16px; background: var(--color-secondary); border-radius: 8px; text-align: center;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--color-text-secondary);">Monthly Revenue</h4>
          <div class="metric-value" style="font-size: 24px; font-weight: bold; color: var(--color-success);">$${customer.monthly_charges.toFixed(2)}</div>
        </div>
        <div class="metric-card" style="padding: 16px; background: var(--color-secondary); border-radius: 8px; text-align: center;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--color-text-secondary);">Tenure</h4>
          <div class="metric-value" style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${customer.tenure} months</div>
        </div>
        <div class="metric-card" style="padding: 16px; background: var(--color-secondary); border-radius: 8px; text-align: center;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--color-text-secondary);">Satisfaction</h4>
          <div class="metric-value" style="font-size: 24px; font-weight: bold; color: var(--color-warning);">${customer.satisfaction.toFixed(1)}/5</div>
        </div>
      </div>
      
      <div class="profile-details">
        <div class="detail-section">
          <h4>Customer Information</h4>
          <div class="detail-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px;">
            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-card-border);">
              <span class="detail-label" style="color: var(--color-text-secondary);">Age:</span>
              <span class="detail-value" style="font-weight: 600;">${customer.age}</span>
            </div>
            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-card-border);">
              <span class="detail-label" style="color: var(--color-text-secondary);">Segment:</span>
              <span class="detail-value" style="font-weight: 600;">${customer.segment}</span>
            </div>
            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-card-border);">
              <span class="detail-label" style="color: var(--color-text-secondary);">Contract:</span>
              <span class="detail-value" style="font-weight: 600;">${customer.contract}</span>
            </div>
            <div class="detail-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-card-border);">
              <span class="detail-label" style="color: var(--color-text-secondary);">Support Tickets:</span>
              <span class="detail-value" style="font-weight: 600;">${customer.support_tickets}</span>
            </div>
          </div>
        </div>
        
        <div class="profile-actions" style="display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
          <button class="btn btn--primary">Create Retention Campaign</button>
          <button class="btn btn--outline">Schedule Call</button>
          <button class="btn btn--outline">Send Email</button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('show');
}

function editCustomer(customerId) {
  showNotification(`Edit functionality for customer ${customerId} would be implemented here`, 'info');
}

function closeCustomerModal() {
  const modal = document.getElementById('customerModal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.add('show');
  }
}

function hideLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.remove('show');
  }
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
    <span>${message}</span>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-card-border);
    border-radius: var(--radius-lg);
    padding: var(--space-16) var(--space-20);
    box-shadow: var(--shadow-lg);
    z-index: 3000;
    display: flex;
    align-items: center;
    gap: var(--space-12);
    min-width: 300px;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    color: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'primary'});
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function refreshChartsInSection() {
  Object.values(charts).forEach(chart => {
    if (chart && chart.update) {
      chart.update('none');
    }
  });
}

// Add event delegation for dynamic elements
document.addEventListener('click', (e) => {
  // Handle export buttons
  if (e.target.closest('.btn') && e.target.textContent.includes('Export')) {
    showNotification('Export functionality would generate and download reports in production', 'info');
  }
  
  // Handle campaign buttons
  if (e.target.textContent.includes('Create Campaign')) {
    showNotification('Campaign creation wizard would open in production', 'info');
  }
});

console.log('🎉 ChurnPredict Pro Dashboard initialized successfully!');