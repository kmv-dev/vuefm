export default () => ({
  url: '',
  alertData: [],
  radioList: [
    {
      name: 'Promodj',
      stream: [
        { name: 'Top 100', url: 'http://radio.promodj.com/top100-192' },
        { name: 'Channel 5', url: 'http://radio.promodj.com/channel5-192' },
        { name: 'Klubb', url: 'http://radio.promodj.com/klubb-192' },
        { name: 'Dubstep', url: 'http://radio.promodj.com/dubstep-192' },
        { name: 'Nu', url: 'http://radio.promodj.com/nu-192' },
        { name: 'Too Nu', url: 'http://radio.promodj.com/toonu-192' },
        { name: 'Yo', url: 'http://radio.promodj.com/yo-192' },
        { name: 'Full Moon', url: 'http://radio.promodj.com/fullmoon-192' },
        { name: 'Vata', url: 'http://radio.promodj.com/vata-192' },
        { name: '300kmh', url: 'http://radio.promodj.com/300kmh-192' },
        { name: '186mph', url: 'http://radio.promodj.com/186mph-192' },
        { name: 'Deep', url: 'https://promodj.com/info/radio' },
        { name: 'Top Deep', url: 'http://radio.promodj.com/toodeep-192' },
        { name: 'Old-School', url: 'http://radio.promodj.com/oldschool-192' },
        { name: 'Strange', url: 'http://radio.promodj.com/strange-192' },
      ]
    },
    {
      name: 'Орфей',
      site: 'https://orpheusradio.ru',
      stream: [
        { name: 'Эфир', url: 'https://orfeyfm.hostingradio.ru:8034/orfeyfm128.mp3' },
        { name: 'Без границ', url: 'https://orfeyfm.hostingradio.ru:8034/orpheuscwb192.mp3' },
        { name: 'Глубокие', url: 'https://channels.fonotron.ru:8000/Chan_8_192.mp3' },
        { name: 'Эстрада', url: 'https://channels.fonotron.ru:8000/Chan_7_192.mp3' },
        { name: 'Кроссовер', url: 'https://channels.fonotron.ru:8000/Chan_6_192.mp3' },
        { name: 'Из кино', url: 'https://channels.fonotron.ru:8000/Chan_9_192.mp3' },
        { name: 'Джаз', url: 'https://channels.fonotron.ru:8000/Chan_12_192.mp3' },
        { name: 'Бельканто', url: 'https://channels.fonotron.ru:8000/Chan_75_128.mp3' },
        { name: 'Лучшее', url: 'https://channels.fonotron.ru:8000/Chan_72_128.mp3' },
        { name: 'Русская', url: 'https://channels.fonotron.ru:8000/Chan_73_128.mp3' },
        { name: 'Симфония', url: 'https://channels.fonotron.ru:8000/Chan_74_128.mp3' },
        { name: 'Клавир', url: 'https://channels.fonotron.ru:8000/Chan_77_128.mp3' }
      ]
    },
    {
      name: 'Europa Plus',
      stream: [
        { name: 'kbps256', url: 'http://ep256.hostingradio.ru:8052/europaplus256.mp3' },
        { name: 'kbps128', url: 'http://ep128.hostingradio.ru:8030/ep128' },
        { name: 'Top 40', url: 'http://eptop128server.streamr.ru:8033/eptop128' },
        { name: 'New', url: 'http://emg02.hostingradio.ru/ep-new128.mp3' },
        { name: 'Light', url: 'http://emg02.hostingradio.ru/ep-light128.mp3' },
        { name: 'ResiDance', url: 'http://emg02.hostingradio.ru/ep-residance128.mp3' }

      ]
    },
    {
      name: 'Радио России',
      stream: [
        { name: 'kbps192', url: 'http://icecast.vgtrk.cdnvideo.ru/rrzonam_mp3_192kbps' },
        { name: 'kbps128', url: 'http://icecast.vgtrk.cdnvideo.ru/rrzonam_mp3_128kbps' },
        { name: 'kbps64', url: 'http://icecast.vgtrk.cdnvideo.ru/rrzonam_mp3_64kbps' }
      ]
    },
    {
      name: 'Радио Культура',
      stream: [
        { name: 'kbps192', url: 'http://icecast.vgtrk.cdnvideo.ru/kulturafm_mp3_192kbps' },
        { name: 'kbps128', url: 'http://icecast.vgtrk.cdnvideo.ru/kulturafm_mp3_128kbps' },
        { name: 'kbps64', url: 'http://icecast.vgtrk.cdnvideo.ru/kulturafm_mp3_64kbps' }
      ]
    },
    {
      name: 'Millennium Radio',
      stream: [
        { name: 'kbps192', url: 'https://myradio24.org/5894' }
      ]
    },
    {
      name: 'Маяк',
      stream: [
        { name: 'kbps192', url: 'http://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_192kbps' },
        { name: 'kbps128', url: 'http://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_128kbps' },
        { name: 'kbps64', url: 'http://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_64kbps' }
      ]
    },
    {
      name: 'Вести FM',
      stream: [
        { name: 'kbps192', url: 'http://icecast.vgtrk.cdnvideo.ru/vestifm_mp3_192kbps' },
        { name: 'kbps128', url: 'http://icecast.vgtrk.cdnvideo.ru/vestifm_mp3_128kbps' },
        { name: 'kbps64', url: 'http://icecast.vgtrk.cdnvideo.ru/vestifm_mp3_64kbps' }
      ]
    },
    {
      name: 'Радио Свобода',
      stream: [
        { name: 'kbps64', url: 'http://rfe04.akacast.akamaistream.net/7/509/437762/v1' }
      ]
    },
    {
      name: 'Комсомольская правда',
      stream: [
        { name: 'kbps128', url: 'http://kpradio.hostingradio.ru:8000/russia.radiokp128.mp3' },
        { name: 'kbps64', url: 'http://kpradio.hostingradio.ru:8000/russia.radiokp64.mp3' }
      ]
    },
    {
      name: 'Коммерсантъ FM',
      stream: [
        { name: 'kbps128', url: 'http://kommersant77.hostingradio.ru:8016/kommersant128.mp3' },
        { name: 'kbps64', url: 'http://kommersant77.hostingradio.ru:8016/kommersant64.mp3' }
      ]
    },
    {
      name: 'Говорит Москва',
      stream: [
        { name: 'kbps96', url: 'http://video.govoritmoskva.ru:8880/rufm.mp3' },
        { name: 'kbps64', url: 'http://media.govoritmoskva.ru:8880/ru64.mp3' }
      ]
    },
    {
      name: 'Радио Звезда',
      site: 'https://radiozvezda.ru/',
      stream: [
        { name: 'kbps128', url: 'https://zvezdafm.hostingradio.ru/zvezdafm128.mp3' },
        { name: 'kbps64', url: 'https://zvezdafm.hostingradio.ru/zvezdafm96.aacp' }
      ]
    },
    {
      name: 'Радио Книга',
      stream: [
        { name: 'kbps256', url: 'http://bookradio.hostingradio.ru:8069/fm' }
      ]
    },
    {
      name: 'Радио Шансон',
      stream: [
        { name: 'kbps256', url: 'http://chanson.hostingradio.ru:8041/chanson256.mp3' },
        { name: 'kbps128', url: 'http://chanson.hostingradio.ru:8041/chanson128.mp3' }
      ]
    },
    {
      name: 'Спутник FM',
      stream: [
        { name: 'kbps256', url: 'https://radio.mediacdn.ru/sputnik_fm.mp3' }
      ]
    },
    {
      name: 'Радио мир',
      stream: [
        { name: 'kbps128', url: 'http://icecast.mirtv.cdnvideo.ru:8000/radio_mir128' }
      ]
    },
    {
      name: 'Русский хит',
      stream: [
        { name: 'kbps64', url: 'http://stream.n340.com:80/19_ruhit_64?type=.aac&UID=D8132D3F9F7490847ADFFE8849229C0E' }
      ]
    },
    {
      name: 'Серебряный дождь',
      stream: [
        { name: 'kbps128', url: 'http://213.59.4.27:8000/silver128.mp3' }
      ]
    },
    {
      name: 'Радио Леопард',
      stream: [
        { name: 'kbps192', url: 'http://radio-server.imfurry.ru:8000/iceleo192' }
      ]
    },
    {
      name: 'Business FM',
      stream: [
        { name: 'kbps128', url: 'https://bfm.hostingradio.ru:9075/fm' }
      ]
    },
    {
      name: 'Nrj',
      stream: [
        { name: 'kbps128', url: 'https://pub0201.101.ru:443/stream/reg/mp3/128/region_energy_118?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI1ZDQ3NGQwOGQ5MGQwN2YzYTM0ZWI5ZGFiZGJiYWQwMyIsIklQIjoiMzEuMjExLjY5LjY4IiwiVUEiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTExLjAuMC4wIFNhZmFyaVwvNTM3LjM2IiwiUmVmIjoiaHR0cHM6XC9cL3d3dy5lbmVyZ3lmbS5ydVwvIiwidWlkX2NoYW5uZWwiOiI5OSIsInR5cGVfY2hhbm5lbCI6ImNoYW5uZWwiLCJ0eXBlRGV2aWNlIjoiUEMiLCJCcm93c2VyIjoiQ2hyb21lIiwiQnJvd3NlclZlcnNpb24iOiIxMTEuMC4wLjAiLCJTeXN0ZW0iOiJXaW5kb3dzIDEwIiwiZXhwIjoxNjc4OTg5ODkyfQ.-jMipYmyWkLTOgsNOpuNsSU9Sp8tiqTxuRNiH2wHwcs' }
      ]
    },
    {
      name: 'Like FM',
      stream: [
        { name: 'kbps128', url: 'http://pub0302.101.ru:8000/stream/air/aac/64/219?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJiZDgyNGJhNzY0ZjIyNzNhZmE3YzQ4OTIxYzIxNzg2ZCIsIklQIjoiMzEuMjExLjY5LjY4IiwiVUEiOiJNb3ppbGxhXC81LjAgKExpbnV4OyBBbmRyb2lkIDYuMDsgTmV4dXMgNSBCdWlsZFwvTVJBNThOKSBBcHBsZVdlYktpdFwvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lXC8xMTEuMC4wLjAgTW9iaWxlIFNhZmFyaVwvNTM3LjM2IiwiUmVmIjoiaHR0cHM6XC9cL3d3dy5saWtlZm0ucnVcLyIsInVpZF9jaGFubmVsIjoiMjE5IiwidHlwZV9jaGFubmVsIjoiY2hhbm5lbCIsInR5cGVEZXZpY2UiOiJwaG9uZSIsIkRldmljZSI6Ik5leHVzIiwiQnJvd3NlciI6IkNocm9tZSIsIlN5c3RlbSI6IkFuZHJvaWQiLCJleHAiOjE2Nzg5OTAwNzF9.ZWwJdDnJCmu0_1vJ1LPaqvPmrw_pyqMR91dFyHjin98' }
      ]
    },
    {
      name: 'Эльдорадио',
      stream: [
        { name: 'kbps128', url: 'http://emgspb.hostingradio.ru/eldoradio128.mp3' }
      ]
    },
    {
      name: 'Дорожное радио',
      stream: [
        { name: 'kbps256', url: 'http://dorognoe.hostingradio.ru:8000/radio' },
        { name: 'kbps64', url: 'http://dorognoe.hostingradio.ru:8000/dorognoe' },
        { name: 'Танцы', url: 'http://dor2server.streamr.ru:8000/dorognoe1945.mp3' },
      ]
    }
  ]
})
