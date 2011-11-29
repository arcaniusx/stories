var vendors = Server.vendors,
    mongoose = vendors.mongoose,
    mongooseAuth = vendors.mongooseAuth,
    Schema = mongoose.Schema;


var Schema = new Schema({}),
    User;


Schema.plugin(mongooseAuth, {
    everymodule: {
        everyauth: {
            User: function () {
                return User;
            }
        }
    },

    password: {
        loginWith: 'email',
        extraParams: {
            name: {
                first: String,
                last: String
            }
        },
        everyauth: {
            /** login **/
            getLoginPath: '/auth/login',
            loginLayout: 'layouts/home',
            loginLocals: {
                title: 'Login'
            },
            loginSuccessRedirect: '/',
            loginView: 'user/login',
            postLoginPath: '/auth/login',
            /** register **/
            registerView: 'user/register',
            getRegisterPath: '/auth/register',
            postRegisterPath: '/auth/register',
            registerLayout: 'layouts/home',
            registerLocals: {
                title: 'Login'
            },
            registerSuccessRedirect: '/'
            /** authentication **/
            //authenticate: Server.actions.user.handlePasswordUser
        }
    },

    twitter: {
        everyauth: {
            consumerKey: 'QdjRfynrTNA5xlphiHaUkQ',
            consumerSecret: '3ccAO7ItwGaHzbIhHWKTEsv8O5P8URlcjJIP43wLc9Y',
            /** authentication **/
            //findOrCreateUser: Server.actions.user.handleTwitterUser,
            redirectPath: '/'
        }
    }
});

Schema.statics.getUsers = function(callback){
    this.find({}, callback);
};

mongoose.model('User', Schema);

module.exports = User = mongoose.model('User');