window.__publicSeatThemeData = (() => {
  const sources = [
    {
      id: 1,
      name: '2025禅城区公办初中积分生报名指南（禅城教育转载）',
      url: 'https://m.fs.bendibao.com/edu/133557.shtm'
    },
    {
      id: 2,
      name: '2025佛山市禅城区公办初中积分生补录通知（禅城教育转载）',
      url: 'https://m.fs.bendibao.com/edu/133849.shtm'
    },
    {
      id: 3,
      name: '2025年佛山市禅城区公办初中积分生补录工作圆满完成（禅城教育）',
      url: 'https://www.foshanplus.com/news/300257079.html'
    },
    {
      id: 4,
      name: '2024年禅城区公办初中积分生网上报名、填报志愿及录取指南',
      url: 'https://www.fs0757.com/home/article/view/id/658321.html'
    },
    {
      id: 5,
      name: '2024年佛山市禅城区公办初中积分生补录通知',
      url: 'https://www.fs0757.com/home/article/view/id/658983.html'
    },
    {
      id: 6,
      name: '明天填报！禅城公办小学、初中普通借读生（积分入学）录取指南→',
      url: 'https://m.thepaper.cn/newsDetail_forward_23669777'
    },
    {
      id: 7,
      name: '佛山禅城区公办小学、初中积分入学补录安排',
      url: 'https://www.fs0757.com/home/article/view/id/641327.html'
    },
    {
      id: 8,
      name: '禅城区公办初中2023年招生方案出炉！明日起网上报名！',
      url: 'https://www.fs0757.com/home/article/view/id/624116.html'
    },
    {
      id: 9,
      name: '4月10日（周三）起网上报名！2024年禅城区公办初中招生方案出炉→',
      url: 'https://www.foshanplus.com/news/855068.html'
    },
    {
      id: 10,
      name: '2025年禅城区公办初中招生工作方案来了！3月26日起报名！',
      url: 'https://www.fs0757.com/home/article/view/id/664300.html'
    },
    {
      id: 11,
      name: '2024年禅城区公办初中自主选校开始了！',
      url: 'https://www.foshanplus.com/news/868454.html'
    },
    {
      id: 12,
      name: '颖子聊升学 | 中签率低至17.5%，自主选校热度持续走高！',
      url: 'https://www.foshanplus.com/news/869699.html'
    },
    {
      id: 13,
      name: '速看！2025年禅城区公办初中自主选校通知',
      url: 'https://m.thepaper.cn/newsDetail_forward_30881499'
    },
    {
      id: 14,
      name: '2025年禅城区公办初中自主选校电脑摇号录取结果公布',
      url: 'https://m.fs.bendibao.com/edu/133089.shtm'
    }
  ];

  const schoolOrder = [
    '惠景中学',
    '佛山三中初中部',
    '佛山十四中',
    '佛山六中',
    '佛山十一中',
    '佛山十中',
    '佛山一中绿岛湖学校',
    '汾江中学',
    '城北中学',
    '澜石中学',
    '张槎中学',
    '南庄三中',
    '南庄中学',
    '吉利中学',
    '佛山大学附属学校（原禅城区智城学校）',
    '荣山中学',
    '佛山四中',
    '佛山市实验学校',
    '佛山市华英学校'
  ];

  const seats2023 = {
    '佛山六中': 130,
    '佛山十中': 15,
    '佛山十一中': 63,
    '佛山十四中': 131,
    '城北中学': 129,
    '汾江中学': 36,
    '荣山中学': 44,
    '张槎中学': 107,
    '吉利中学': 30,
    '佛山大学附属学校（原禅城区智城学校）': 45,
    '佛山一中绿岛湖学校': 45
  };

  function row2023(school) {
    if (school === '佛山市实验学校' || school === '佛山市华英学校') {
      return {
        school,
        status: '不在本口径名单',
        seats: '不纳入“禅城区公办初中积分生志愿学校”口径',
        applicants: '未公开',
        admissions: '未公开',
        note: '两校为独立招生口径，公开页面未见纳入本批积分生志愿学校。',
        sourceRefs: [6]
      };
    }

    const seat = seats2023[school];
    if (typeof seat === 'number') {
      return {
        school,
        status: '已确认有积分生',
        seats: String(seat),
        applicants: '学校级报名数未公开',
        admissions: '学校级录取数未公开（仅见区级补录通知）',
        note: '该校在2023年11所积分生志愿学校名单中。',
        sourceRefs: [6, 7]
      };
    }

    return {
      school,
      status: '未在当年11校名单中',
      seats: '按公开名单未见投放',
      applicants: '未公开',
      admissions: '未公开',
      note: '2023年官方口径为“11所公办初中安排积分学位”。',
      sourceRefs: [6]
    };
  }

  function row2024(school) {
    if (school === '佛山市实验学校' || school === '佛山市华英学校') {
      return {
        school,
        status: '不在本口径名单',
        seats: '不纳入“禅城区公办初中积分生志愿学校”口径',
        applicants: '未公开',
        admissions: '未公开',
        note: '公开页面未见两校纳入该批积分生志愿学校。',
        sourceRefs: [4, 5]
      };
    }

    if (school === '城北中学') {
      return {
        school,
        status: '已确认有积分生',
        seats: '补录123（首轮学校级席位未公开）',
        applicants: '补录意向登记范围：全区排名639-1155',
        admissions: '补录最终录取数未见稳定公开',
        note: '第一轮后仅城北中学有剩余学位并补录。',
        sourceRefs: [4, 5]
      };
    }

    return {
      school,
      status: '学校级未公开',
      seats: '首轮学校级席位未公开',
      applicants: '未公开',
      admissions: '未公开',
      note: '仅确认“城北中学等学校”参与首轮，未见完整逐校名单。',
      sourceRefs: [4, 5]
    };
  }

  function row2025(school) {
    if (school === '佛山市实验学校' || school === '佛山市华英学校') {
      return {
        school,
        status: '不在本口径名单',
        seats: '不纳入“禅城区公办初中积分生志愿学校”口径',
        applicants: '未公开',
        admissions: '未公开',
        note: '公开页面未见两校纳入该批积分生志愿学校。',
        sourceRefs: [1, 2, 3]
      };
    }

    if (school === '城北中学') {
      return {
        school,
        status: '已确认有积分生',
        seats: '补录40（首轮学校级席位未公开）',
        applicants: '补录电话通知覆盖排名438-491（共54个名次）',
        admissions: '补录实际录取40；放弃14；补录录到排名491',
        note: '2025年仅公开“城北中学等5所”参与积分生招收，4所名称未公开。',
        sourceRefs: [1, 2, 3]
      };
    }

    return {
      school,
      status: '学校级未公开',
      seats: '首轮学校级席位未公开',
      applicants: '未公开',
      admissions: '未公开',
      note: '官方只公开“城北中学等5所公办初中招收积分生”，未公布完整名单。',
      sourceRefs: [1, 2]
    };
  }

  const years = [
    {
      year: 2025,
      summary: '区级总量和补录结果较完整，但首轮逐校席位及逐校报名录取仍未公开。',
      overall: {
        totalSeats: '408',
        qualified: '排名1-437（含2对双胞胎）、340分以上；其中31名已按政策生入读，不参加积分志愿',
        applicants: '全区实际报名总人数未公开（可填报对象按口径可推到约408人）',
        admissions: '补录前剩余40席；补录实际录取40；补录录到排名491（14人放弃）',
        supplement: '仅城北中学补录40'
      },
      schools: schoolOrder.map(row2025),
      sourceRefs: [1, 2, 3]
    },
    {
      year: 2024,
      summary: '区级总席位明确，补录学校和补录席位明确；首轮逐校席位与最终学校级录取未公开。',
      overall: {
        totalSeats: '638',
        qualified: '全区排名1-638、积分321分以上取得资格',
        applicants: '全区实际报名总人数未公开（仅见补录意向登记范围639-1155）',
        admissions: '首轮后仅城北中学有123席补录；补录最终录取总数未见稳定公开',
        supplement: '城北中学补录123'
      },
      schools: schoolOrder.map(row2024),
      sourceRefs: [4, 5]
    },
    {
      year: 2023,
      summary: '三年里学校级席位公开最完整的一年：11所学校共775个积分学位。',
      overall: {
        totalSeats: '775',
        qualified: '全区排名1-774（含1对双胞胎）取得入读资格',
        applicants: '全区实际报名总人数未公开',
        admissions: '首轮后3校共102席补录（最终补录录取总数未见稳定公开）',
        supplement: '城北中学等3校补录共102'
      },
      schools: schoolOrder.map(row2023),
      sourceRefs: [6, 7]
    }
  ];

  const lotteryCases = [
    {
      year: 2025,
      type: '佛实初中自主选校（摇号）',
      trigger: '报名时需选择是否参加“佛山市实验学校（初中）自主选校（摇号）”；具体超额规则按佛实初中招生方案执行。',
      scope: '符合佛实初中报名条件的小学应届毕业生（含优教服务对象适龄子女）。',
      disclosure: '该公开页未见摇号报名人数、摇号录取人数。',
      sourceRefs: [10]
    },
    {
      year: 2024,
      type: '佛实初中自主选校（摇号）',
      trigger: '报名时需选择是否参加“佛山市实验学校（初中）自主选校（摇号）”；具体超额规则按佛实初中招生方案执行。',
      scope: '符合佛实初中报名条件的小学应届毕业生（含优教服务对象适龄子女）。',
      disclosure: '该公开页未见摇号报名人数、摇号录取人数。',
      sourceRefs: [9]
    },
    {
      year: 2023,
      type: '佛实初中自主选校（摇号）',
      trigger: '报名时需选择是否参加“佛山市实验学校（初中）自主选校（摇号）”；具体超额规则按佛实初中招生方案执行。',
      scope: '符合佛实初中报名条件的小学应届毕业生（含优教服务对象适龄子女）。',
      disclosure: '该公开页未见摇号报名人数、摇号录取人数。',
      sourceRefs: [8]
    },
    {
      year: 2025,
      type: '禅城区公办初中自主选校（智城/绿岛湖）',
      trigger: '选择参加自主选校人数不超过学位数量时直接录取；超过学位数量时，采取电脑摇号方式录取。',
      scope: '佛山市禅城区智城学校（初中）与佛山市禅城区绿岛湖学校（初中）自主选校对象。',
      disclosure: '2025通知页公开智城110学位、绿岛湖100学位；结果公告确认两校报名人数均超过学位数并已实际摇号，但学校级报名总数/中签率未公开。',
      sourceRefs: [13, 14]
    },
    {
      year: 2024,
      type: '禅城区公办初中自主选校（智城/绿岛湖）',
      trigger: '选择参加自主选校人数不超过学位数量时直接录取；超过学位数量时，采取电脑摇号方式录取。',
      scope: '佛山市禅城区智城学校（初中）与佛山市禅城区绿岛湖学校（初中）自主选校对象。',
      disclosure: '通知页公开智城50学位、绿岛湖250学位；后续录取数据图显示智城286报50学位（17.5%）、绿岛湖365报250学位（68.5%）。',
      sourceRefs: [11, 12]
    },
    {
      year: 2023,
      type: '禅城区公办初中自主选校（智城/绿岛湖）',
      trigger: '学校仍有剩余学位时开展自主选校；报名超过学位数则摇号，未超过则直接录取。',
      scope: '智城学校（初中）、绿岛湖学校（初中）与南庄镇中心小学等开展自主选校的学校对象。',
      disclosure: '佛山新闻传媒中心2024年回顾图显示：智城300报100学位（33.3%），绿岛湖351报480学位、直接录取；本轮未追到2023原始名单页。',
      sourceRefs: [12]
    }
  ];

  return {
    meta: {
      title: '禅城区列表学校积分生学位分配（2023-2025）',
      updatedAt: '2026-04-19',
      schoolCount: 19,
      yearsCovered: '2023-2025'
    },
    notes: [
      '范围严格限定：禅城区 + 当前项目固定的19所学校，不纳入其他区。',
      '主题只看“公办初中积分生”口径，不混入户籍生、直升生、政策生常规分配。',
      '能落到学校级数字就写数字；拿不到学校级数字明确标“未公开”。',
      '“可填报对象约408人”等口径属于按官方已给数字推导，页面会明确标注“推导”。'
    ],
    highlights: [
      {
        title: '三年积分学位总量',
        text: '2023-2025三年合计公开积分学位为1821个（2023:775，2024:638，2025:408）。'
      },
      {
        title: '学校级公开度差异很大',
        text: '2023年公开了11所学校逐校学位；2024和2025只公开区级总量，学校级首轮学位基本未公开。'
      },
      {
        title: '城北中学补录最明确',
        text: '2024补录123席、2025补录40席都明确落在城北中学；其余学校补录/首轮细分公开不足。'
      }
    ],
    totals: {
      totalSeats3Years: '1821',
      byYear: [
        { year: 2023, seats: 775 },
        { year: 2024, seats: 638 },
        { year: 2025, seats: 408 }
      ],
      totalKnownSupplementSeats: '265（2023:102 + 2024:123 + 2025:40）',
      applicantDisclosure: '三年均未公开“全区积分生实际报名总人数”；仅公开资格排名范围或补录通知范围。',
      admissionDisclosure: '2025补录完成信息最完整；2023和2024未见稳定公开的最终补录录取总数。'
    },
    lottery: {
      summary: '近3年已核实到两类摇号路径：佛实初中自主选校（2023-2025），以及禅城区公办初中自主选校超额电脑摇号；后者在智城学校这条线上已能确认到2023、2024、2025三年连续存在。',
      note: '截至2026-04-19，未检索到新增的“禅城区公办初中积分生录取”摇号路径；本页摇号清单用于说明其他招生路径，不代表积分生按摇号录取。',
      cases: lotteryCases
    },
    years,
    sources
  };
})();
