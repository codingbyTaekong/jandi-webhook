# JANDI INCOMEHOOK

# Install
```bash
npm install jandi-webhook
```

# Hook Usage

## 잔디 메신저 안에서 사용하고자 하는 토빅방의 인컴훅을 생성한다.
<img src="https://downloads.intercomcdn.com/i/o/571938073/fd7a2de3c46ac3e39a611289/image.png" >

```javascript
import JandiHook from 'jandi-webhook'

JandiHook(
    "발급받은 웹훅URL",
    {
        body : "최상단에 노출할 메세지",
        connectInfo : [ // 메세지 하단 말풍선에 노출될 메세지들의 배열
            {
                title : "메세지 하단 말풍선 내 최상단 메세지",
                description : "메세지 하단 말풍선 내 중간 메세지",
                imageUrl : "메세지 하단 말풍선 내 노출될 Link의 URL"
            }
        ]
    },
    "error"
)
```

# Params
| filed | data type | description |
|-----|---|---|
| url | string | [필수] 잔디 메신저에서 발급받은 인컴훅의 URL 주소 |
| data | Objext Array | [필수] 잔디 메신저로 보낼 데이터 |
| tpye | error or success or warning | [선택] 메세지 하단 바의 색상 |

## data Filed 
| filed | data type | description |
|-----|---|---|
| body | string | [필수] 최상단에 노출될 메세지 |
| connectInfo | Objext Array | [선택] 메세지 하단 말풍선에 노출될 메세지들의 배열 |

## connectInfo Filed
| filed | data type | description |
|-----|---|---|
| title | string | [선택]메세지 하단 말풍선 내 최상단 메세지 |
| description | string | [선택]메세지 하단 말풍선 내 중간 메세지 |
| imageUrl | string | [선택]메세지 하단 말풍선 내 노출된 Link의 URL |




