# There is no development folder, this is the FINAL folder

# Team WHYN
Members
* Luo Wenhan
* Tan Wei Hao
* Yap Ni
* Nicholas Chua

# Business Challenge :  Digital Singapore Stopover Holiday
The Singapore Stopover Holiday (SSH) currently requires passengers to collect a pack of vouchers and brochures on arrival. It is a challenge to keep them updated on special events and operation hours of tourist attractions. How can we make this more seamless for our customers?

# Functionalities :
1. Android and IOS apps designed each platform
2. Electronic SSH package redemption
3. Mobile QR Ticket for entering attractions
4. Digitized Attraction Brochure
5. Interactive bus routes map
6. Streamlined feedback mechanism

# User Guide :
Download and install SSH.apk on to your Android phone

# Developer Guide :
## Database server
Our app uses GraphQL so go ahead and setup your favourite GraphQL server and import graphql.schema into it

## React Native app compilation
1. Clone this repository
2. Run npm install
3. Modify app.json
    - Be sure to change the Google Maps API Key, refer to [Expo MapView Android Deployment](https://docs.expo.io/versions/latest/sdk/map-view.html) if you are unsure
4. Modify app/config/apiKeys.js to your own API Keys
5. Modify app/config/configureApollo.js and point the URI to your own GraphQL server
6. Login and build for Android and IOS with [Expo](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html)
