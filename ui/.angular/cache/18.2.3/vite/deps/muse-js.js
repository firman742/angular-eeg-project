import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-DKPAFMVZ.js";

// node_modules/muse-js/node_modules/tslib/tslib.es6.js
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var extendStatics;
var init_tslib_es6 = __esm({
  "node_modules/muse-js/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isFunction.js
function isFunction(x) {
  return typeof x === "function";
}
var init_isFunction = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isFunction.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/config.js
var _enable_super_gross_mode_that_will_cause_bad_things, config;
var init_config = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/config.js"() {
    _enable_super_gross_mode_that_will_cause_bad_things = false;
    config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/hostReportError.js
function hostReportError(err) {
  setTimeout(function() {
    throw err;
  }, 0);
}
var init_hostReportError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/hostReportError.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/Observer.js
var empty;
var init_Observer = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/Observer.js"() {
    init_config();
    init_hostReportError();
    empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isArray.js
var isArray;
var init_isArray = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isArray.js"() {
    isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isObject.js
function isObject(x) {
  return x !== null && typeof x === "object";
}
var init_isObject = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isObject.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionErrorImpl, UnsubscriptionError;
var init_UnsubscriptionError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js"() {
    UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/Subscription.js
function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function(errs, err) {
    return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
  }, []);
}
var Subscription;
var init_Subscription = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/Subscription.js"() {
    init_isArray();
    init_isObject();
    init_isFunction();
    init_UnsubscriptionError();
    Subscription = function() {
      function Subscription2(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription2.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) {
          return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription2) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }
        if (isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }
        if (isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];
                if (e instanceof UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription2.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription2(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription2)) {
              var tmp = subscription;
              subscription = new Subscription2();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription2) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription2.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription2.EMPTY = function(empty3) {
        empty3.closed = true;
        return empty3;
      }(new Subscription2());
      return Subscription2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
var rxSubscriber;
var init_rxSubscriber = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"() {
    rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber, SafeSubscriber;
var init_Subscriber = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/Subscriber.js"() {
    init_tslib_es6();
    init_isFunction();
    init_Observer();
    init_Subscription();
    init_rxSubscriber();
    init_config();
    init_hostReportError();
    Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error, complete) {
        var subscriber = new Subscriber2(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription);
    SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== empty) {
            context = Object.create(observerOrNext);
            if (isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/canReportError.js
function canReportError(observer) {
  while (observer) {
    var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }
  return true;
}
var init_canReportError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/canReportError.js"() {
    init_Subscriber();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/toSubscriber.js
function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof Subscriber) {
      return nextOrObserver;
    }
    if (nextOrObserver[rxSubscriber]) {
      return nextOrObserver[rxSubscriber]();
    }
  }
  if (!nextOrObserver && !error && !complete) {
    return new Subscriber(empty);
  }
  return new Subscriber(nextOrObserver, error, complete);
}
var init_toSubscriber = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/toSubscriber.js"() {
    init_Subscriber();
    init_rxSubscriber();
    init_Observer();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/symbol/observable.js
var observable;
var init_observable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/symbol/observable.js"() {
    observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/identity.js
function identity(x) {
  return x;
}
var init_identity = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/identity.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/pipe.js
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var init_pipe = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/pipe.js"() {
    init_identity();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/Observable.js
function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = config.Promise || Promise;
  }
  if (!promiseCtor) {
    throw new Error("no Promise impl found");
  }
  return promiseCtor;
}
var Observable;
var init_Observable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/Observable.js"() {
    init_canReportError();
    init_toSubscriber();
    init_observable();
    init_pipe();
    init_config();
    Observable = function() {
      function Observable2(subscribe) {
        this._isScalar = false;
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable2 = new Observable2();
        observable2.source = this;
        observable2.operator = operator;
        return observable2;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable2.prototype[observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedErrorImpl, ObjectUnsubscribedError;
var init_ObjectUnsubscribedError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"() {
    ObjectUnsubscribedErrorImpl = function() {
      function ObjectUnsubscribedErrorImpl2() {
        Error.call(this);
        this.message = "object unsubscribed";
        this.name = "ObjectUnsubscribedError";
        return this;
      }
      ObjectUnsubscribedErrorImpl2.prototype = Object.create(Error.prototype);
      return ObjectUnsubscribedErrorImpl2;
    }();
    ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/SubjectSubscription.js
var SubjectSubscription;
var init_SubjectSubscription = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/SubjectSubscription.js"() {
    init_tslib_es6();
    init_Subscription();
    SubjectSubscription = function(_super) {
      __extends(SubjectSubscription2, _super);
      function SubjectSubscription2(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
      }
      SubjectSubscription2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
          return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
          observers.splice(subscriberIndex, 1);
        }
      };
      return SubjectSubscription2;
    }(Subscription);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/Subject.js
var SubjectSubscriber, Subject, AnonymousSubject;
var init_Subject = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/Subject.js"() {
    init_tslib_es6();
    init_Observable();
    init_Subscriber();
    init_Subscription();
    init_ObjectUnsubscribedError();
    init_SubjectSubscription();
    init_rxSubscriber();
    SubjectSubscriber = function(_super) {
      __extends(SubjectSubscriber2, _super);
      function SubjectSubscriber2(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
      }
      return SubjectSubscriber2;
    }(Subscriber);
    Subject = function(_super) {
      __extends(Subject2, _super);
      function Subject2() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      Subject2.prototype[rxSubscriber] = function() {
        return new SubjectSubscriber(this);
      };
      Subject2.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject2.prototype.next = function(value) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i = 0; i < len; i++) {
            copy[i].next(value);
          }
        }
      };
      Subject2.prototype.error = function(err) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
          copy[i].error(err);
        }
        this.observers.length = 0;
      };
      Subject2.prototype.complete = function() {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
          copy[i].complete();
        }
        this.observers.length = 0;
      };
      Subject2.prototype.unsubscribe = function() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
      };
      Subject2.prototype._trySubscribe = function(subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else {
          return _super.prototype._trySubscribe.call(this, subscriber);
        }
      };
      Subject2.prototype._subscribe = function(subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else if (this.hasError) {
          subscriber.error(this.thrownError);
          return Subscription.EMPTY;
        } else if (this.isStopped) {
          subscriber.complete();
          return Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          return new SubjectSubscription(this, subscriber);
        }
      };
      Subject2.prototype.asObservable = function() {
        var observable2 = new Observable();
        observable2.source = this;
        return observable2;
      };
      Subject2.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
      };
      return Subject2;
    }(Observable);
    AnonymousSubject = function(_super) {
      __extends(AnonymousSubject2, _super);
      function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
      }
      AnonymousSubject2.prototype.next = function(value) {
        var destination = this.destination;
        if (destination && destination.next) {
          destination.next(value);
        }
      };
      AnonymousSubject2.prototype.error = function(err) {
        var destination = this.destination;
        if (destination && destination.error) {
          this.destination.error(err);
        }
      };
      AnonymousSubject2.prototype.complete = function() {
        var destination = this.destination;
        if (destination && destination.complete) {
          this.destination.complete();
        }
      };
      AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        if (source) {
          return this.source.subscribe(subscriber);
        } else {
          return Subscription.EMPTY;
        }
      };
      return AnonymousSubject2;
    }(Subject);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/refCount.js
function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}
var RefCountOperator, RefCountSubscriber;
var init_refCount = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/refCount.js"() {
    init_tslib_es6();
    init_Subscriber();
    RefCountOperator = function() {
      function RefCountOperator3(connectable) {
        this.connectable = connectable;
      }
      RefCountOperator3.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
          refCounter.connection = connectable.connect();
        }
        return subscription;
      };
      return RefCountOperator3;
    }();
    RefCountSubscriber = function(_super) {
      __extends(RefCountSubscriber3, _super);
      function RefCountSubscriber3(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
      }
      RefCountSubscriber3.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
          this.connection = null;
          return;
        }
        this.connectable = null;
        var refCount2 = connectable._refCount;
        if (refCount2 <= 0) {
          this.connection = null;
          return;
        }
        connectable._refCount = refCount2 - 1;
        if (refCount2 > 1) {
          this.connection = null;
          return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
          sharedConnection.unsubscribe();
        }
      };
      return RefCountSubscriber3;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable, connectableObservableDescriptor, ConnectableSubscriber, RefCountOperator2, RefCountSubscriber2;
var init_ConnectableObservable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js"() {
    init_tslib_es6();
    init_Subject();
    init_Observable();
    init_Subscriber();
    init_Subscription();
    init_refCount();
    ConnectableObservable = function(_super) {
      __extends(ConnectableObservable2, _super);
      function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
      }
      ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
      };
      ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
          this._subject = this.subjectFactory();
        }
        return this._subject;
      };
      ConnectableObservable2.prototype.connect = function() {
        var connection = this._connection;
        if (!connection) {
          this._isComplete = false;
          connection = this._connection = new Subscription();
          connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
          if (connection.closed) {
            this._connection = null;
            connection = Subscription.EMPTY;
          }
        }
        return connection;
      };
      ConnectableObservable2.prototype.refCount = function() {
        return refCount()(this);
      };
      return ConnectableObservable2;
    }(Observable);
    connectableObservableDescriptor = function() {
      var connectableProto = ConnectableObservable.prototype;
      return {
        operator: {
          value: null
        },
        _refCount: {
          value: 0,
          writable: true
        },
        _subject: {
          value: null,
          writable: true
        },
        _connection: {
          value: null,
          writable: true
        },
        _subscribe: {
          value: connectableProto._subscribe
        },
        _isComplete: {
          value: connectableProto._isComplete,
          writable: true
        },
        getSubject: {
          value: connectableProto.getSubject
        },
        connect: {
          value: connectableProto.connect
        },
        refCount: {
          value: connectableProto.refCount
        }
      };
    }();
    ConnectableSubscriber = function(_super) {
      __extends(ConnectableSubscriber2, _super);
      function ConnectableSubscriber2(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
      }
      ConnectableSubscriber2.prototype._error = function(err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
      };
      ConnectableSubscriber2.prototype._complete = function() {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
      };
      ConnectableSubscriber2.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (connectable) {
          this.connectable = null;
          var connection = connectable._connection;
          connectable._refCount = 0;
          connectable._subject = null;
          connectable._connection = null;
          if (connection) {
            connection.unsubscribe();
          }
        }
      };
      return ConnectableSubscriber2;
    }(SubjectSubscriber);
    RefCountOperator2 = function() {
      function RefCountOperator3(connectable) {
        this.connectable = connectable;
      }
      RefCountOperator3.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber2(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
          refCounter.connection = connectable.connect();
        }
        return subscription;
      };
      return RefCountOperator3;
    }();
    RefCountSubscriber2 = function(_super) {
      __extends(RefCountSubscriber3, _super);
      function RefCountSubscriber3(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
      }
      RefCountSubscriber3.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
          this.connection = null;
          return;
        }
        this.connectable = null;
        var refCount2 = connectable._refCount;
        if (refCount2 <= 0) {
          this.connection = null;
          return;
        }
        connectable._refCount = refCount2 - 1;
        if (refCount2 > 1) {
          this.connection = null;
          return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
          sharedConnection.unsubscribe();
        }
      };
      return RefCountSubscriber3;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/groupBy.js
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function(source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}
var GroupByOperator, GroupBySubscriber, GroupDurationSubscriber, GroupedObservable, InnerRefCountSubscription;
var init_groupBy = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/groupBy.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Subscription();
    init_Observable();
    init_Subject();
    GroupByOperator = function() {
      function GroupByOperator2(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
      }
      GroupByOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
      };
      return GroupByOperator2;
    }();
    GroupBySubscriber = function(_super) {
      __extends(GroupBySubscriber2, _super);
      function GroupBySubscriber2(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
      }
      GroupBySubscriber2.prototype._next = function(value) {
        var key;
        try {
          key = this.keySelector(value);
        } catch (err) {
          this.error(err);
          return;
        }
        this._group(value, key);
      };
      GroupBySubscriber2.prototype._group = function(value, key) {
        var groups = this.groups;
        if (!groups) {
          groups = this.groups = /* @__PURE__ */ new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
          try {
            element = this.elementSelector(value);
          } catch (err) {
            this.error(err);
          }
        } else {
          element = value;
        }
        if (!group) {
          group = this.subjectSelector ? this.subjectSelector() : new Subject();
          groups.set(key, group);
          var groupedObservable = new GroupedObservable(key, group, this);
          this.destination.next(groupedObservable);
          if (this.durationSelector) {
            var duration = void 0;
            try {
              duration = this.durationSelector(new GroupedObservable(key, group));
            } catch (err) {
              this.error(err);
              return;
            }
            this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
          }
        }
        if (!group.closed) {
          group.next(element);
        }
      };
      GroupBySubscriber2.prototype._error = function(err) {
        var groups = this.groups;
        if (groups) {
          groups.forEach(function(group, key) {
            group.error(err);
          });
          groups.clear();
        }
        this.destination.error(err);
      };
      GroupBySubscriber2.prototype._complete = function() {
        var groups = this.groups;
        if (groups) {
          groups.forEach(function(group, key) {
            group.complete();
          });
          groups.clear();
        }
        this.destination.complete();
      };
      GroupBySubscriber2.prototype.removeGroup = function(key) {
        this.groups.delete(key);
      };
      GroupBySubscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.attemptedToUnsubscribe = true;
          if (this.count === 0) {
            _super.prototype.unsubscribe.call(this);
          }
        }
      };
      return GroupBySubscriber2;
    }(Subscriber);
    GroupDurationSubscriber = function(_super) {
      __extends(GroupDurationSubscriber2, _super);
      function GroupDurationSubscriber2(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
      }
      GroupDurationSubscriber2.prototype._next = function(value) {
        this.complete();
      };
      GroupDurationSubscriber2.prototype._unsubscribe = function() {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
          parent.removeGroup(key);
        }
      };
      return GroupDurationSubscriber2;
    }(Subscriber);
    GroupedObservable = function(_super) {
      __extends(GroupedObservable2, _super);
      function GroupedObservable2(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
      }
      GroupedObservable2.prototype._subscribe = function(subscriber) {
        var subscription = new Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
          subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
      };
      return GroupedObservable2;
    }(Observable);
    InnerRefCountSubscription = function(_super) {
      __extends(InnerRefCountSubscription2, _super);
      function InnerRefCountSubscription2(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
      }
      InnerRefCountSubscription2.prototype.unsubscribe = function() {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
          _super.prototype.unsubscribe.call(this);
          parent.count -= 1;
          if (parent.count === 0 && parent.attemptedToUnsubscribe) {
            parent.unsubscribe();
          }
        }
      };
      return InnerRefCountSubscription2;
    }(Subscription);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/BehaviorSubject.js
var BehaviorSubject;
var init_BehaviorSubject = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/BehaviorSubject.js"() {
    init_tslib_es6();
    init_Subject();
    init_ObjectUnsubscribedError();
    BehaviorSubject = function(_super) {
      __extends(BehaviorSubject2, _super);
      function BehaviorSubject2(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
      }
      Object.defineProperty(BehaviorSubject2.prototype, "value", {
        get: function() {
          return this.getValue();
        },
        enumerable: true,
        configurable: true
      });
      BehaviorSubject2.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
          subscriber.next(this._value);
        }
        return subscription;
      };
      BehaviorSubject2.prototype.getValue = function() {
        if (this.hasError) {
          throw this.thrownError;
        } else if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else {
          return this._value;
        }
      };
      BehaviorSubject2.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject2;
    }(Subject);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/Action.js
var Action;
var init_Action = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/Action.js"() {
    init_tslib_es6();
    init_Subscription();
    Action = function(_super) {
      __extends(Action2, _super);
      function Action2(scheduler, work) {
        return _super.call(this) || this;
      }
      Action2.prototype.schedule = function(state, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        return this;
      };
      return Action2;
    }(Subscription);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js
var AsyncAction;
var init_AsyncAction = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"() {
    init_tslib_es6();
    init_Action();
    AsyncAction = function(_super) {
      __extends(AsyncAction2, _super);
      function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }
      AsyncAction2.prototype.schedule = function(state, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (this.closed) {
          return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay2);
        }
        this.pending = true;
        this.delay = delay2;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay2);
        return this;
      };
      AsyncAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay2);
      };
      AsyncAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (delay2 !== null && this.delay === delay2 && this.pending === false) {
          return id;
        }
        clearInterval(id);
        return void 0;
      };
      AsyncAction2.prototype.execute = function(state, delay2) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay2);
        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      AsyncAction2.prototype._execute = function(state, delay2) {
        var errored = false;
        var errorValue = void 0;
        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = !!e && e || new Error(e);
        }
        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };
      AsyncAction2.prototype._unsubscribe = function() {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
          actions.splice(index, 1);
        }
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
      };
      return AsyncAction2;
    }(Action);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js
var QueueAction;
var init_QueueAction = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js"() {
    init_tslib_es6();
    init_AsyncAction();
    QueueAction = function(_super) {
      __extends(QueueAction2, _super);
      function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      QueueAction2.prototype.schedule = function(state, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (delay2 > 0) {
          return _super.prototype.schedule.call(this, state, delay2);
        }
        this.delay = delay2;
        this.state = state;
        this.scheduler.flush(this);
        return this;
      };
      QueueAction2.prototype.execute = function(state, delay2) {
        return delay2 > 0 || this.closed ? _super.prototype.execute.call(this, state, delay2) : this._execute(state, delay2);
      };
      QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (delay2 !== null && delay2 > 0 || delay2 === null && this.delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
        }
        return scheduler.flush(this);
      };
      return QueueAction2;
    }(AsyncAction);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler;
var init_Scheduler = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/Scheduler.js"() {
    Scheduler = function() {
      function Scheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler2.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
      }
      Scheduler2.prototype.schedule = function(work, delay2, state) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay2);
      };
      Scheduler2.now = function() {
        return Date.now();
      };
      return Scheduler2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler;
var init_AsyncScheduler = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"() {
    init_tslib_es6();
    init_Scheduler();
    AsyncScheduler = function(_super) {
      __extends(AsyncScheduler2, _super);
      function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function() {
          if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== _this) {
            return AsyncScheduler2.delegate.now();
          } else {
            return now();
          }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = void 0;
        return _this;
      }
      AsyncScheduler2.prototype.schedule = function(work, delay2, state) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== this) {
          return AsyncScheduler2.delegate.schedule(work, delay2, state);
        } else {
          return _super.prototype.schedule.call(this, work, delay2, state);
        }
      };
      AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this.active) {
          actions.push(action);
          return;
        }
        var error;
        this.active = true;
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsyncScheduler2;
    }(Scheduler);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js
var QueueScheduler;
var init_QueueScheduler = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js"() {
    init_tslib_es6();
    init_AsyncScheduler();
    QueueScheduler = function(_super) {
      __extends(QueueScheduler2, _super);
      function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return QueueScheduler2;
    }(AsyncScheduler);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/queue.js
var queueScheduler, queue;
var init_queue = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/queue.js"() {
    init_QueueAction();
    init_QueueScheduler();
    queueScheduler = new QueueScheduler(QueueAction);
    queue = queueScheduler;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/empty.js
function empty2(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(function(subscriber) {
    return scheduler.schedule(function() {
      return subscriber.complete();
    });
  });
}
var EMPTY;
var init_empty = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/empty.js"() {
    init_Observable();
    EMPTY = new Observable(function(subscriber) {
      return subscriber.complete();
    });
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && typeof value.schedule === "function";
}
var init_isScheduler = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isScheduler.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
var subscribeToArray;
var init_subscribeToArray = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js"() {
    subscribeToArray = function(array) {
      return function(subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      };
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    var i = 0;
    sub.add(scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
        return;
      }
      subscriber.next(input[i++]);
      if (!subscriber.closed) {
        sub.add(this.schedule());
      }
    }));
    return sub;
  });
}
var init_scheduleArray = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js"() {
    init_Observable();
    init_Subscription();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/fromArray.js
function fromArray(input, scheduler) {
  if (!scheduler) {
    return new Observable(subscribeToArray(input));
  } else {
    return scheduleArray(input, scheduler);
  }
}
var init_fromArray = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/fromArray.js"() {
    init_Observable();
    init_subscribeToArray();
    init_scheduleArray();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = args[args.length - 1];
  if (isScheduler(scheduler)) {
    args.pop();
    return scheduleArray(args, scheduler);
  } else {
    return fromArray(args);
  }
}
var init_of = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/of.js"() {
    init_isScheduler();
    init_fromArray();
    init_scheduleArray();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/throwError.js
function throwError(error, scheduler) {
  if (!scheduler) {
    return new Observable(function(subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new Observable(function(subscriber) {
      return scheduler.schedule(dispatch, 0, {
        error,
        subscriber
      });
    });
  }
}
function dispatch(_a) {
  var error = _a.error, subscriber = _a.subscriber;
  subscriber.error(error);
}
var init_throwError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/throwError.js"() {
    init_Observable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/Notification.js
var NotificationKind, Notification;
var init_Notification = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/Notification.js"() {
    init_empty();
    init_of();
    init_throwError();
    (function(NotificationKind2) {
      NotificationKind2["NEXT"] = "N";
      NotificationKind2["ERROR"] = "E";
      NotificationKind2["COMPLETE"] = "C";
    })(NotificationKind || (NotificationKind = {}));
    Notification = function() {
      function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
      }
      Notification2.prototype.observe = function(observer) {
        switch (this.kind) {
          case "N":
            return observer.next && observer.next(this.value);
          case "E":
            return observer.error && observer.error(this.error);
          case "C":
            return observer.complete && observer.complete();
        }
      };
      Notification2.prototype.do = function(next, error, complete) {
        var kind = this.kind;
        switch (kind) {
          case "N":
            return next && next(this.value);
          case "E":
            return error && error(this.error);
          case "C":
            return complete && complete();
        }
      };
      Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === "function") {
          return this.observe(nextOrObserver);
        } else {
          return this.do(nextOrObserver, error, complete);
        }
      };
      Notification2.prototype.toObservable = function() {
        var kind = this.kind;
        switch (kind) {
          case "N":
            return of(this.value);
          case "E":
            return throwError(this.error);
          case "C":
            return empty2();
        }
        throw new Error("unexpected notification kind value");
      };
      Notification2.createNext = function(value) {
        if (typeof value !== "undefined") {
          return new Notification2("N", value);
        }
        return Notification2.undefinedValueNotification;
      };
      Notification2.createError = function(err) {
        return new Notification2("E", void 0, err);
      };
      Notification2.createComplete = function() {
        return Notification2.completeNotification;
      };
      Notification2.completeNotification = new Notification2("C");
      Notification2.undefinedValueNotification = new Notification2("N", void 0);
      return Notification2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay2));
  };
}
var ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage;
var init_observeOn = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/observeOn.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Notification();
    ObserveOnOperator = function() {
      function ObserveOnOperator2(scheduler, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay2;
      }
      ObserveOnOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
      };
      return ObserveOnOperator2;
    }();
    ObserveOnSubscriber = function(_super) {
      __extends(ObserveOnSubscriber2, _super);
      function ObserveOnSubscriber2(destination, scheduler, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay2;
        return _this;
      }
      ObserveOnSubscriber2.dispatch = function(arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
      };
      ObserveOnSubscriber2.prototype.scheduleMessage = function(notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber2.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
      };
      ObserveOnSubscriber2.prototype._next = function(value) {
        this.scheduleMessage(Notification.createNext(value));
      };
      ObserveOnSubscriber2.prototype._error = function(err) {
        this.scheduleMessage(Notification.createError(err));
        this.unsubscribe();
      };
      ObserveOnSubscriber2.prototype._complete = function() {
        this.scheduleMessage(Notification.createComplete());
        this.unsubscribe();
      };
      return ObserveOnSubscriber2;
    }(Subscriber);
    ObserveOnMessage = /* @__PURE__ */ function() {
      function ObserveOnMessage2(notification, destination) {
        this.notification = notification;
        this.destination = destination;
      }
      return ObserveOnMessage2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/ReplaySubject.js
var ReplaySubject, ReplayEvent;
var init_ReplaySubject = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/ReplaySubject.js"() {
    init_tslib_es6();
    init_Subject();
    init_queue();
    init_Subscription();
    init_observeOn();
    init_ObjectUnsubscribedError();
    init_SubjectSubscription();
    ReplaySubject = function(_super) {
      __extends(ReplaySubject2, _super);
      function ReplaySubject2(bufferSize, windowTime2, scheduler) {
        if (bufferSize === void 0) {
          bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime2 === void 0) {
          windowTime2 = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime2 < 1 ? 1 : windowTime2;
        if (windowTime2 === Number.POSITIVE_INFINITY) {
          _this._infiniteTimeWindow = true;
          _this.next = _this.nextInfiniteTimeWindow;
        } else {
          _this.next = _this.nextTimeWindow;
        }
        return _this;
      }
      ReplaySubject2.prototype.nextInfiniteTimeWindow = function(value) {
        if (!this.isStopped) {
          var _events = this._events;
          _events.push(value);
          if (_events.length > this._bufferSize) {
            _events.shift();
          }
        }
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype.nextTimeWindow = function(value) {
        if (!this.isStopped) {
          this._events.push(new ReplayEvent(this._getNow(), value));
          this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype._subscribe = function(subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else if (this.isStopped || this.hasError) {
          subscription = Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          subscription = new SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
          subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
          for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i]);
          }
        } else {
          for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
          }
        }
        if (this.hasError) {
          subscriber.error(this.thrownError);
        } else if (this.isStopped) {
          subscriber.complete();
        }
        return subscription;
      };
      ReplaySubject2.prototype._getNow = function() {
        return (this.scheduler || queue).now();
      };
      ReplaySubject2.prototype._trimBufferThenGetEvents = function() {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
          if (now - _events[spliceCount].time < _windowTime) {
            break;
          }
          spliceCount++;
        }
        if (eventsCount > _bufferSize) {
          spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
          _events.splice(0, spliceCount);
        }
        return _events;
      };
      return ReplaySubject2;
    }(Subject);
    ReplayEvent = /* @__PURE__ */ function() {
      function ReplayEvent2(time, value) {
        this.time = time;
        this.value = value;
      }
      return ReplayEvent2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/AsyncSubject.js
var AsyncSubject;
var init_AsyncSubject = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/AsyncSubject.js"() {
    init_tslib_es6();
    init_Subject();
    init_Subscription();
    AsyncSubject = function(_super) {
      __extends(AsyncSubject2, _super);
      function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
      }
      AsyncSubject2.prototype._subscribe = function(subscriber) {
        if (this.hasError) {
          subscriber.error(this.thrownError);
          return Subscription.EMPTY;
        } else if (this.hasCompleted && this.hasNext) {
          subscriber.next(this.value);
          subscriber.complete();
          return Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
      };
      AsyncSubject2.prototype.next = function(value) {
        if (!this.hasCompleted) {
          this.value = value;
          this.hasNext = true;
        }
      };
      AsyncSubject2.prototype.error = function(error) {
        if (!this.hasCompleted) {
          _super.prototype.error.call(this, error);
        }
      };
      AsyncSubject2.prototype.complete = function() {
        this.hasCompleted = true;
        if (this.hasNext) {
          _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
      };
      return AsyncSubject2;
    }(Subject);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/Immediate.js
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
var nextHandle, RESOLVED, activeHandles, Immediate;
var init_Immediate = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/Immediate.js"() {
    nextHandle = 1;
    RESOLVED = function() {
      return Promise.resolve();
    }();
    activeHandles = {};
    Immediate = {
      setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function() {
          return findAndClearHandle(handle) && cb();
        });
        return handle;
      },
      clearImmediate: function(handle) {
        findAndClearHandle(handle);
      }
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js
var AsapAction;
var init_AsapAction = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js"() {
    init_tslib_es6();
    init_Immediate();
    init_AsyncAction();
    AsapAction = function(_super) {
      __extends(AsapAction2, _super);
      function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (delay2 !== null && delay2 > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
      };
      AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (delay2 !== null && delay2 > 0 || delay2 === null && this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
        }
        if (scheduler.actions.length === 0) {
          Immediate.clearImmediate(id);
          scheduler.scheduled = void 0;
        }
        return void 0;
      };
      return AsapAction2;
    }(AsyncAction);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js
var AsapScheduler;
var init_AsapScheduler = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js"() {
    init_tslib_es6();
    init_AsyncScheduler();
    AsapScheduler = function(_super) {
      __extends(AsapScheduler2, _super);
      function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AsapScheduler2.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = void 0;
        var actions = this.actions;
        var error;
        var index = -1;
        var count2 = actions.length;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (++index < count2 && (action = actions.shift()));
        this.active = false;
        if (error) {
          while (++index < count2 && (action = actions.shift())) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsapScheduler2;
    }(AsyncScheduler);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/asap.js
var asapScheduler, asap;
var init_asap = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/asap.js"() {
    init_AsapAction();
    init_AsapScheduler();
    asapScheduler = new AsapScheduler(AsapAction);
    asap = asapScheduler;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/async.js
var asyncScheduler, async;
var init_async = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/async.js"() {
    init_AsyncAction();
    init_AsyncScheduler();
    asyncScheduler = new AsyncScheduler(AsyncAction);
    async = asyncScheduler;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction;
var init_AnimationFrameAction = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js"() {
    init_tslib_es6();
    init_AsyncAction();
    AnimationFrameAction = function(_super) {
      __extends(AnimationFrameAction2, _super);
      function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (delay2 !== null && delay2 > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function() {
          return scheduler.flush(null);
        }));
      };
      AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (delay2 !== null && delay2 > 0 || delay2 === null && this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
        }
        if (scheduler.actions.length === 0) {
          cancelAnimationFrame(id);
          scheduler.scheduled = void 0;
        }
        return void 0;
      };
      return AnimationFrameAction2;
    }(AsyncAction);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler;
var init_AnimationFrameScheduler = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js"() {
    init_tslib_es6();
    init_AsyncScheduler();
    AnimationFrameScheduler = function(_super) {
      __extends(AnimationFrameScheduler2, _super);
      function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AnimationFrameScheduler2.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = void 0;
        var actions = this.actions;
        var error;
        var index = -1;
        var count2 = actions.length;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (++index < count2 && (action = actions.shift()));
        this.active = false;
        if (error) {
          while (++index < count2 && (action = actions.shift())) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AnimationFrameScheduler2;
    }(AsyncScheduler);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler, animationFrame;
var init_animationFrame = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js"() {
    init_AnimationFrameAction();
    init_AnimationFrameScheduler();
    animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);
    animationFrame = animationFrameScheduler;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js
var VirtualTimeScheduler, VirtualAction;
var init_VirtualTimeScheduler = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js"() {
    init_tslib_es6();
    init_AsyncAction();
    init_AsyncScheduler();
    VirtualTimeScheduler = function(_super) {
      __extends(VirtualTimeScheduler2, _super);
      function VirtualTimeScheduler2(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
          SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
          maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function() {
          return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
      }
      VirtualTimeScheduler2.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
          actions.shift();
          this.frame = action.delay;
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        }
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      VirtualTimeScheduler2.frameTimeFactor = 10;
      return VirtualTimeScheduler2;
    }(AsyncScheduler);
    VirtualAction = function(_super) {
      __extends(VirtualAction2, _super);
      function VirtualAction2(scheduler, work, index) {
        if (index === void 0) {
          index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
      }
      VirtualAction2.prototype.schedule = function(state, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (!this.id) {
          return _super.prototype.schedule.call(this, state, delay2);
        }
        this.active = false;
        var action = new VirtualAction2(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay2);
      };
      VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        this.delay = scheduler.frame + delay2;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return true;
      };
      VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        return void 0;
      };
      VirtualAction2.prototype._execute = function(state, delay2) {
        if (this.active === true) {
          return _super.prototype._execute.call(this, state, delay2);
        }
      };
      VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
          if (a.index === b.index) {
            return 0;
          } else if (a.index > b.index) {
            return 1;
          } else {
            return -1;
          }
        } else if (a.delay > b.delay) {
          return 1;
        } else {
          return -1;
        }
      };
      return VirtualAction2;
    }(AsyncAction);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/noop.js
function noop() {
}
var init_noop = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/noop.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isObservable.js
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || typeof obj.lift === "function" && typeof obj.subscribe === "function");
}
var init_isObservable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isObservable.js"() {
    init_Observable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeErrorImpl, ArgumentOutOfRangeError;
var init_ArgumentOutOfRangeError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js"() {
    ArgumentOutOfRangeErrorImpl = function() {
      function ArgumentOutOfRangeErrorImpl2() {
        Error.call(this);
        this.message = "argument out of range";
        this.name = "ArgumentOutOfRangeError";
        return this;
      }
      ArgumentOutOfRangeErrorImpl2.prototype = Object.create(Error.prototype);
      return ArgumentOutOfRangeErrorImpl2;
    }();
    ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/EmptyError.js
var EmptyErrorImpl, EmptyError;
var init_EmptyError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/EmptyError.js"() {
    EmptyErrorImpl = function() {
      function EmptyErrorImpl2() {
        Error.call(this);
        this.message = "no elements in sequence";
        this.name = "EmptyError";
        return this;
      }
      EmptyErrorImpl2.prototype = Object.create(Error.prototype);
      return EmptyErrorImpl2;
    }();
    EmptyError = EmptyErrorImpl;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/TimeoutError.js
var TimeoutErrorImpl, TimeoutError;
var init_TimeoutError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/TimeoutError.js"() {
    TimeoutErrorImpl = function() {
      function TimeoutErrorImpl2() {
        Error.call(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        return this;
      }
      TimeoutErrorImpl2.prototype = Object.create(Error.prototype);
      return TimeoutErrorImpl2;
    }();
    TimeoutError = TimeoutErrorImpl;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/map.js
function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== "function") {
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    }
    return source.lift(new MapOperator(project, thisArg));
  };
}
var MapOperator, MapSubscriber;
var init_map = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/map.js"() {
    init_tslib_es6();
    init_Subscriber();
    MapOperator = function() {
      function MapOperator2(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }
      MapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator2;
    }();
    MapSubscriber = function(_super) {
      __extends(MapSubscriber2, _super);
      function MapSubscriber2(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      MapSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return MapSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/bindCallback.js
function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function(args2) {
          return isArray(args2) ? resultSelector.apply(void 0, args2) : resultSelector(args2);
        }));
      };
    }
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var context = this;
    var subject;
    var params = {
      context,
      subject,
      callbackFunc,
      scheduler
    };
    return new Observable(function(subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new AsyncSubject();
          var handler = function() {
            var innerArgs = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              innerArgs[_i2] = arguments[_i2];
            }
            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };
          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }
        return subject.subscribe(subscriber);
      } else {
        var state = {
          args,
          subscriber,
          params
        };
        return scheduler.schedule(dispatch2, 0, state);
      }
    });
  };
}
function dispatch2(state) {
  var _this = this;
  var self = this;
  var args = state.args, subscriber = state.subscriber, params = state.params;
  var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
  var subject = params.subject;
  if (!subject) {
    subject = params.subject = new AsyncSubject();
    var handler = function() {
      var innerArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }
      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
      _this.add(scheduler.schedule(dispatchNext, 0, {
        value,
        subject
      }));
    };
    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }
  this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
  var value = state.value, subject = state.subject;
  subject.next(value);
  subject.complete();
}
var init_bindCallback = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/bindCallback.js"() {
    init_Observable();
    init_AsyncSubject();
    init_map();
    init_canReportError();
    init_isArray();
    init_isScheduler();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function(args2) {
          return isArray(args2) ? resultSelector.apply(void 0, args2) : resultSelector(args2);
        }));
      };
    }
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var params = {
      subject: void 0,
      args,
      callbackFunc,
      scheduler,
      context: this
    };
    return new Observable(function(subscriber) {
      var context = params.context;
      var subject = params.subject;
      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new AsyncSubject();
          var handler = function() {
            var innerArgs = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              innerArgs[_i2] = arguments[_i2];
            }
            var err = innerArgs.shift();
            if (err) {
              subject.error(err);
              return;
            }
            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };
          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch3, 0, {
          params,
          subscriber,
          context
        });
      }
    });
  };
}
function dispatch3(state) {
  var _this = this;
  var params = state.params, subscriber = state.subscriber, context = state.context;
  var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
  var subject = params.subject;
  if (!subject) {
    subject = params.subject = new AsyncSubject();
    var handler = function() {
      var innerArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }
      var err = innerArgs.shift();
      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, {
          err,
          subject
        }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
        _this.add(scheduler.schedule(dispatchNext2, 0, {
          value,
          subject
        }));
      }
    };
    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, {
        err,
        subject
      }));
    }
  }
  this.add(subject.subscribe(subscriber));
}
function dispatchNext2(arg) {
  var value = arg.value, subject = arg.subject;
  subject.next(value);
  subject.complete();
}
function dispatchError(arg) {
  var err = arg.err, subject = arg.subject;
  subject.error(err);
}
var init_bindNodeCallback = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js"() {
    init_Observable();
    init_AsyncSubject();
    init_map();
    init_canReportError();
    init_isScheduler();
    init_isArray();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/OuterSubscriber.js
var OuterSubscriber;
var init_OuterSubscriber = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/OuterSubscriber.js"() {
    init_tslib_es6();
    init_Subscriber();
    OuterSubscriber = function(_super) {
      __extends(OuterSubscriber2, _super);
      function OuterSubscriber2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      OuterSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
      };
      OuterSubscriber2.prototype.notifyError = function(error, innerSub) {
        this.destination.error(error);
      };
      OuterSubscriber2.prototype.notifyComplete = function(innerSub) {
        this.destination.complete();
      };
      return OuterSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/InnerSubscriber.js
var InnerSubscriber;
var init_InnerSubscriber = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/InnerSubscriber.js"() {
    init_tslib_es6();
    init_Subscriber();
    InnerSubscriber = function(_super) {
      __extends(InnerSubscriber2, _super);
      function InnerSubscriber2(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
      }
      InnerSubscriber2.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
      };
      InnerSubscriber2.prototype._error = function(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
      };
      InnerSubscriber2.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
      };
      return InnerSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js
var subscribeToPromise;
var init_subscribeToPromise = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js"() {
    init_hostReportError();
    subscribeToPromise = function(promise) {
      return function(subscriber) {
        promise.then(function(value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function(err) {
          return subscriber.error(err);
        }).then(null, hostReportError);
        return subscriber;
      };
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator;
var init_iterator = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/symbol/iterator.js"() {
    iterator = getSymbolIterator();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js
var subscribeToIterable;
var init_subscribeToIterable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js"() {
    init_iterator();
    subscribeToIterable = function(iterable) {
      return function(subscriber) {
        var iterator2 = iterable[iterator]();
        do {
          var item = void 0;
          try {
            item = iterator2.next();
          } catch (err) {
            subscriber.error(err);
            return subscriber;
          }
          if (item.done) {
            subscriber.complete();
            break;
          }
          subscriber.next(item.value);
          if (subscriber.closed) {
            break;
          }
        } while (true);
        if (typeof iterator2.return === "function") {
          subscriber.add(function() {
            if (iterator2.return) {
              iterator2.return();
            }
          });
        }
        return subscriber;
      };
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js
var subscribeToObservable;
var init_subscribeToObservable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js"() {
    init_observable();
    subscribeToObservable = function(obj) {
      return function(subscriber) {
        var obs = obj[observable]();
        if (typeof obs.subscribe !== "function") {
          throw new TypeError("Provided object does not correctly implement Symbol.observable");
        } else {
          return obs.subscribe(subscriber);
        }
      };
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isArrayLike.js
var isArrayLike;
var init_isArrayLike = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isArrayLike.js"() {
    isArrayLike = function(x) {
      return x && typeof x.length === "number" && typeof x !== "function";
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isPromise.js
function isPromise(value) {
  return !!value && typeof value.subscribe !== "function" && typeof value.then === "function";
}
var init_isPromise = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isPromise.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeTo.js
var subscribeTo;
var init_subscribeTo = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeTo.js"() {
    init_subscribeToArray();
    init_subscribeToPromise();
    init_subscribeToIterable();
    init_subscribeToObservable();
    init_isArrayLike();
    init_isPromise();
    init_isObject();
    init_iterator();
    init_observable();
    subscribeTo = function(result) {
      if (!!result && typeof result[observable] === "function") {
        return subscribeToObservable(result);
      } else if (isArrayLike(result)) {
        return subscribeToArray(result);
      } else if (isPromise(result)) {
        return subscribeToPromise(result);
      } else if (!!result && typeof result[iterator] === "function") {
        return subscribeToIterable(result);
      } else {
        var value = isObject(result) ? "an invalid object" : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
        throw new TypeError(msg);
      }
    };
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
  if (innerSubscriber === void 0) {
    innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }
  if (innerSubscriber.closed) {
    return void 0;
  }
  if (result instanceof Observable) {
    return result.subscribe(innerSubscriber);
  }
  return subscribeTo(result)(innerSubscriber);
}
var init_subscribeToResult = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"() {
    init_InnerSubscriber();
    init_subscribeTo();
    init_Observable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/combineLatest.js
function combineLatest() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var resultSelector = void 0;
  var scheduler = void 0;
  if (isScheduler(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }
  if (typeof observables[observables.length - 1] === "function") {
    resultSelector = observables.pop();
  }
  if (observables.length === 1 && isArray(observables[0])) {
    observables = observables[0];
  }
  return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var NONE, CombineLatestOperator, CombineLatestSubscriber;
var init_combineLatest = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/combineLatest.js"() {
    init_tslib_es6();
    init_isScheduler();
    init_isArray();
    init_OuterSubscriber();
    init_subscribeToResult();
    init_fromArray();
    NONE = {};
    CombineLatestOperator = function() {
      function CombineLatestOperator2(resultSelector) {
        this.resultSelector = resultSelector;
      }
      CombineLatestOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
      };
      return CombineLatestOperator2;
    }();
    CombineLatestSubscriber = function(_super) {
      __extends(CombineLatestSubscriber2, _super);
      function CombineLatestSubscriber2(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
      }
      CombineLatestSubscriber2.prototype._next = function(observable2) {
        this.values.push(NONE);
        this.observables.push(observable2);
      };
      CombineLatestSubscriber2.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
          this.destination.complete();
        } else {
          this.active = len;
          this.toRespond = len;
          for (var i = 0; i < len; i++) {
            var observable2 = observables[i];
            this.add(subscribeToResult(this, observable2, void 0, i));
          }
        }
      };
      CombineLatestSubscriber2.prototype.notifyComplete = function(unused) {
        if ((this.active -= 1) === 0) {
          this.destination.complete();
        }
      };
      CombineLatestSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
          if (this.resultSelector) {
            this._tryResultSelector(values);
          } else {
            this.destination.next(values.slice());
          }
        }
      };
      CombineLatestSubscriber2.prototype._tryResultSelector = function(values) {
        var result;
        try {
          result = this.resultSelector.apply(this, values);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return CombineLatestSubscriber2;
    }(OuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    sub.add(scheduler.schedule(function() {
      var observable2 = input[observable]();
      sub.add(observable2.subscribe({
        next: function(value) {
          sub.add(scheduler.schedule(function() {
            return subscriber.next(value);
          }));
        },
        error: function(err) {
          sub.add(scheduler.schedule(function() {
            return subscriber.error(err);
          }));
        },
        complete: function() {
          sub.add(scheduler.schedule(function() {
            return subscriber.complete();
          }));
        }
      }));
    }));
    return sub;
  });
}
var init_scheduleObservable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js"() {
    init_Observable();
    init_Subscription();
    init_observable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    sub.add(scheduler.schedule(function() {
      return input.then(function(value) {
        sub.add(scheduler.schedule(function() {
          subscriber.next(value);
          sub.add(scheduler.schedule(function() {
            return subscriber.complete();
          }));
        }));
      }, function(err) {
        sub.add(scheduler.schedule(function() {
          return subscriber.error(err);
        }));
      });
    }));
    return sub;
  });
}
var init_schedulePromise = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js"() {
    init_Observable();
    init_Subscription();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    var iterator2;
    sub.add(function() {
      if (iterator2 && typeof iterator2.return === "function") {
        iterator2.return();
      }
    });
    sub.add(scheduler.schedule(function() {
      iterator2 = input[iterator]();
      sub.add(scheduler.schedule(function() {
        if (subscriber.closed) {
          return;
        }
        var value;
        var done;
        try {
          var result = iterator2.next();
          value = result.value;
          done = result.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
          this.schedule();
        }
      }));
    }));
    return sub;
  });
}
var init_scheduleIterable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js"() {
    init_Observable();
    init_Subscription();
    init_iterator();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return input && typeof input[observable] === "function";
}
var init_isInteropObservable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isInteropObservable.js"() {
    init_observable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isIterable.js
function isIterable(input) {
  return input && typeof input[iterator] === "function";
}
var init_isIterable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isIterable.js"() {
    init_iterator();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    } else if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    } else if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    } else if (isIterable(input) || typeof input === "string") {
      return scheduleIterable(input, scheduler);
    }
  }
  throw new TypeError((input !== null && typeof input || input) + " is not observable");
}
var init_scheduled = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/scheduled/scheduled.js"() {
    init_scheduleObservable();
    init_schedulePromise();
    init_scheduleArray();
    init_scheduleIterable();
    init_isInteropObservable();
    init_isPromise();
    init_isArrayLike();
    init_isIterable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/from.js
function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof Observable) {
      return input;
    }
    return new Observable(subscribeTo(input));
  } else {
    return scheduled(input, scheduler);
  }
}
var init_from = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/from.js"() {
    init_Observable();
    init_subscribeTo();
    init_scheduled();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/innerSubscribe.js
function innerSubscribe(result, innerSubscriber) {
  if (innerSubscriber.closed) {
    return void 0;
  }
  if (result instanceof Observable) {
    return result.subscribe(innerSubscriber);
  }
  var subscription;
  try {
    subscription = subscribeTo(result)(innerSubscriber);
  } catch (error) {
    innerSubscriber.error(error);
  }
  return subscription;
}
var SimpleInnerSubscriber, ComplexInnerSubscriber, SimpleOuterSubscriber, ComplexOuterSubscriber;
var init_innerSubscribe = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/innerSubscribe.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Observable();
    init_subscribeTo();
    SimpleInnerSubscriber = function(_super) {
      __extends(SimpleInnerSubscriber2, _super);
      function SimpleInnerSubscriber2(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
      }
      SimpleInnerSubscriber2.prototype._next = function(value) {
        this.parent.notifyNext(value);
      };
      SimpleInnerSubscriber2.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
      };
      SimpleInnerSubscriber2.prototype._complete = function() {
        this.parent.notifyComplete();
        this.unsubscribe();
      };
      return SimpleInnerSubscriber2;
    }(Subscriber);
    ComplexInnerSubscriber = function(_super) {
      __extends(ComplexInnerSubscriber2, _super);
      function ComplexInnerSubscriber2(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
      }
      ComplexInnerSubscriber2.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
      };
      ComplexInnerSubscriber2.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
      };
      ComplexInnerSubscriber2.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
      };
      return ComplexInnerSubscriber2;
    }(Subscriber);
    SimpleOuterSubscriber = function(_super) {
      __extends(SimpleOuterSubscriber2, _super);
      function SimpleOuterSubscriber2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      SimpleOuterSubscriber2.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
      };
      SimpleOuterSubscriber2.prototype.notifyError = function(err) {
        this.destination.error(err);
      };
      SimpleOuterSubscriber2.prototype.notifyComplete = function() {
        this.destination.complete();
      };
      return SimpleOuterSubscriber2;
    }(Subscriber);
    ComplexOuterSubscriber = function(_super) {
      __extends(ComplexOuterSubscriber2, _super);
      function ComplexOuterSubscriber2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ComplexOuterSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
      };
      ComplexOuterSubscriber2.prototype.notifyError = function(error) {
        this.destination.error(error);
      };
      ComplexOuterSubscriber2.prototype.notifyComplete = function(_innerSub) {
        this.destination.complete();
      };
      return ComplexOuterSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  if (typeof resultSelector === "function") {
    return function(source) {
      return source.pipe(mergeMap(function(a, i) {
        return from(project(a, i)).pipe(map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return function(source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}
var MergeMapOperator, MergeMapSubscriber, flatMap;
var init_mergeMap = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeMap.js"() {
    init_tslib_es6();
    init_map();
    init_from();
    init_innerSubscribe();
    MergeMapOperator = function() {
      function MergeMapOperator2(project, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
      }
      MergeMapOperator2.prototype.call = function(observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
      };
      return MergeMapOperator2;
    }();
    MergeMapSubscriber = function(_super) {
      __extends(MergeMapSubscriber2, _super);
      function MergeMapSubscriber2(destination, project, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
      }
      MergeMapSubscriber2.prototype._next = function(value) {
        if (this.active < this.concurrent) {
          this._tryNext(value);
        } else {
          this.buffer.push(value);
        }
      };
      MergeMapSubscriber2.prototype._tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
          result = this.project(value, index);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.active++;
        this._innerSub(result);
      };
      MergeMapSubscriber2.prototype._innerSub = function(ish) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
          destination.add(innerSubscription);
        }
      };
      MergeMapSubscriber2.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
          this.destination.complete();
        }
        this.unsubscribe();
      };
      MergeMapSubscriber2.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
      };
      MergeMapSubscriber2.prototype.notifyComplete = function() {
        var buffer2 = this.buffer;
        this.active--;
        if (buffer2.length > 0) {
          this._next(buffer2.shift());
        } else if (this.active === 0 && this.hasCompleted) {
          this.destination.complete();
        }
      };
      return MergeMapSubscriber2;
    }(SimpleOuterSubscriber);
    flatMap = mergeMap;
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  return mergeMap(identity, concurrent);
}
var init_mergeAll = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeAll.js"() {
    init_mergeMap();
    init_identity();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}
var init_concatAll = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concatAll.js"() {
    init_mergeAll();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/concat.js
function concat() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return concatAll()(of.apply(void 0, observables));
}
var init_concat = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/concat.js"() {
    init_of();
    init_concatAll();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/defer.js
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    var input;
    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var source = input ? from(input) : empty2();
    return source.subscribe(subscriber);
  });
}
var init_defer = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/defer.js"() {
    init_Observable();
    init_from();
    init_empty();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/forkJoin.js
function forkJoin() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  if (sources.length === 1) {
    var first_1 = sources[0];
    if (isArray(first_1)) {
      return forkJoinInternal(first_1, null);
    }
    if (isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
      var keys = Object.keys(first_1);
      return forkJoinInternal(keys.map(function(key) {
        return first_1[key];
      }), keys);
    }
  }
  if (typeof sources[sources.length - 1] === "function") {
    var resultSelector_1 = sources.pop();
    sources = sources.length === 1 && isArray(sources[0]) ? sources[0] : sources;
    return forkJoinInternal(sources, null).pipe(map(function(args) {
      return resultSelector_1.apply(void 0, args);
    }));
  }
  return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
  return new Observable(function(subscriber) {
    var len = sources.length;
    if (len === 0) {
      subscriber.complete();
      return;
    }
    var values = new Array(len);
    var completed = 0;
    var emitted = 0;
    var _loop_1 = function(i2) {
      var source = from(sources[i2]);
      var hasValue = false;
      subscriber.add(source.subscribe({
        next: function(value) {
          if (!hasValue) {
            hasValue = true;
            emitted++;
          }
          values[i2] = value;
        },
        error: function(err) {
          return subscriber.error(err);
        },
        complete: function() {
          completed++;
          if (completed === len || !hasValue) {
            if (emitted === len) {
              subscriber.next(keys ? keys.reduce(function(result, key, i3) {
                return result[key] = values[i3], result;
              }, {}) : values);
            }
            subscriber.complete();
          }
        }
      }));
    };
    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }
  });
}
var init_forkJoin = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/forkJoin.js"() {
    init_Observable();
    init_isArray();
    init_map();
    init_isObject();
    init_from();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/fromEvent.js
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(map(function(args) {
      return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }
  return new Observable(function(subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }
    setupSubscription(target, eventName, handler, subscriber, options);
  });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;
  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);
    unsubscribe = function() {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);
    unsubscribe = function() {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);
    unsubscribe = function() {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError("Invalid event target");
  }
  subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === "function" && typeof sourceObj.removeListener === "function";
}
function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === "function" && typeof sourceObj.off === "function";
}
function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === "function" && typeof sourceObj.removeEventListener === "function";
}
var init_fromEvent = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/fromEvent.js"() {
    init_Observable();
    init_isArray();
    init_isFunction();
    init_map();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js
function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe(map(function(args) {
      return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }
  return new Observable(function(subscriber) {
    var handler = function() {
      var e = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }
      return subscriber.next(e.length === 1 ? e[0] : e);
    };
    var retValue;
    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    if (!isFunction(removeHandler)) {
      return void 0;
    }
    return function() {
      return removeHandler(handler, retValue);
    };
  });
}
var init_fromEventPattern = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js"() {
    init_Observable();
    init_isArray();
    init_isFunction();
    init_map();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/generate.js
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;
  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === void 0 || isScheduler(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }
  return new Observable(function(subscriber) {
    var state = initialState;
    if (scheduler) {
      return scheduler.schedule(dispatch4, 0, {
        subscriber,
        iterate,
        condition,
        resultSelector,
        state
      });
    }
    do {
      if (condition) {
        var conditionResult = void 0;
        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return void 0;
        }
        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }
      var value = void 0;
      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return void 0;
      }
      subscriber.next(value);
      if (subscriber.closed) {
        break;
      }
      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return void 0;
      }
    } while (true);
    return void 0;
  });
}
function dispatch4(state) {
  var subscriber = state.subscriber, condition = state.condition;
  if (subscriber.closed) {
    return void 0;
  }
  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
  } else {
    state.needIterate = true;
  }
  if (condition) {
    var conditionResult = void 0;
    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    if (!conditionResult) {
      subscriber.complete();
      return void 0;
    }
    if (subscriber.closed) {
      return void 0;
    }
  }
  var value;
  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return void 0;
  }
  if (subscriber.closed) {
    return void 0;
  }
  subscriber.next(value);
  if (subscriber.closed) {
    return void 0;
  }
  return this.schedule(state);
}
var init_generate = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/generate.js"() {
    init_Observable();
    init_identity();
    init_isScheduler();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/iif.js
function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = EMPTY;
  }
  if (falseResult === void 0) {
    falseResult = EMPTY;
  }
  return defer(function() {
    return condition() ? trueResult : falseResult;
  });
}
var init_iif = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/iif.js"() {
    init_defer();
    init_empty();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isNumeric.js
function isNumeric(val) {
  return !isArray(val) && val - parseFloat(val) + 1 >= 0;
}
var init_isNumeric = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isNumeric.js"() {
    init_isArray();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/interval.js
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  if (!isNumeric(period) || period < 0) {
    period = 0;
  }
  if (!scheduler || typeof scheduler.schedule !== "function") {
    scheduler = async;
  }
  return new Observable(function(subscriber) {
    subscriber.add(scheduler.schedule(dispatch5, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}
function dispatch5(state) {
  var subscriber = state.subscriber, counter = state.counter, period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}
var init_interval = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/interval.js"() {
    init_Observable();
    init_async();
    init_isNumeric();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/merge.js
function merge() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last2 = observables[observables.length - 1];
  if (isScheduler(last2)) {
    scheduler = observables.pop();
    if (observables.length > 1 && typeof observables[observables.length - 1] === "number") {
      concurrent = observables.pop();
    }
  } else if (typeof last2 === "number") {
    concurrent = observables.pop();
  }
  if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
    return observables[0];
  }
  return mergeAll(concurrent)(fromArray(observables, scheduler));
}
var init_merge = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/merge.js"() {
    init_Observable();
    init_isScheduler();
    init_mergeAll();
    init_fromArray();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/never.js
function never() {
  return NEVER;
}
var NEVER;
var init_never = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/never.js"() {
    init_Observable();
    init_noop();
    NEVER = new Observable(noop);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js
function onErrorResumeNext() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  if (sources.length === 0) {
    return EMPTY;
  }
  var first2 = sources[0], remainder = sources.slice(1);
  if (sources.length === 1 && isArray(first2)) {
    return onErrorResumeNext.apply(void 0, first2);
  }
  return new Observable(function(subscriber) {
    var subNext = function() {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };
    return from(first2).subscribe({
      next: function(value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
var init_onErrorResumeNext = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js"() {
    init_Observable();
    init_from();
    init_isArray();
    init_empty();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/pairs.js
function pairs(obj, scheduler) {
  if (!scheduler) {
    return new Observable(function(subscriber) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];
        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }
      subscriber.complete();
    });
  } else {
    return new Observable(function(subscriber) {
      var keys = Object.keys(obj);
      var subscription = new Subscription();
      subscription.add(scheduler.schedule(dispatch6, 0, {
        keys,
        index: 0,
        subscriber,
        subscription,
        obj
      }));
      return subscription;
    });
  }
}
function dispatch6(state) {
  var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({
        keys,
        index: index + 1,
        subscriber,
        subscription,
        obj
      }));
    } else {
      subscriber.complete();
    }
  }
}
var init_pairs = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/pairs.js"() {
    init_Observable();
    init_Subscription();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/not.js
function not(pred, thisArg) {
  function notPred() {
    return !notPred.pred.apply(notPred.thisArg, arguments);
  }
  notPred.pred = pred;
  notPred.thisArg = thisArg;
  return notPred;
}
var init_not = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/not.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}
var FilterOperator, FilterSubscriber;
var init_filter = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/filter.js"() {
    init_tslib_es6();
    init_Subscriber();
    FilterOperator = function() {
      function FilterOperator2(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
      }
      FilterOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator2;
    }();
    FilterSubscriber = function(_super) {
      __extends(FilterSubscriber2, _super);
      function FilterSubscriber2(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
      }
      FilterSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.destination.next(value);
        }
      };
      return FilterSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/partition.js
function partition(source, predicate, thisArg) {
  return [filter(predicate, thisArg)(new Observable(subscribeTo(source))), filter(not(predicate, thisArg))(new Observable(subscribeTo(source)))];
}
var init_partition = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/partition.js"() {
    init_not();
    init_subscribeTo();
    init_filter();
    init_Observable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/race.js
function race() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  if (observables.length === 1) {
    if (isArray(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }
  return fromArray(observables, void 0).lift(new RaceOperator());
}
var RaceOperator, RaceSubscriber;
var init_race = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/race.js"() {
    init_tslib_es6();
    init_isArray();
    init_fromArray();
    init_OuterSubscriber();
    init_subscribeToResult();
    RaceOperator = function() {
      function RaceOperator2() {
      }
      RaceOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
      };
      return RaceOperator2;
    }();
    RaceSubscriber = function(_super) {
      __extends(RaceSubscriber2, _super);
      function RaceSubscriber2(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
      }
      RaceSubscriber2.prototype._next = function(observable2) {
        this.observables.push(observable2);
      };
      RaceSubscriber2.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
          this.destination.complete();
        } else {
          for (var i = 0; i < len && !this.hasFirst; i++) {
            var observable2 = observables[i];
            var subscription = subscribeToResult(this, observable2, void 0, i);
            if (this.subscriptions) {
              this.subscriptions.push(subscription);
            }
            this.add(subscription);
          }
          this.observables = null;
        }
      };
      RaceSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
          this.hasFirst = true;
          for (var i = 0; i < this.subscriptions.length; i++) {
            if (i !== outerIndex) {
              var subscription = this.subscriptions[i];
              subscription.unsubscribe();
              this.remove(subscription);
            }
          }
          this.subscriptions = null;
        }
        this.destination.next(innerValue);
      };
      return RaceSubscriber2;
    }(OuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/range.js
function range(start, count2, scheduler) {
  if (start === void 0) {
    start = 0;
  }
  return new Observable(function(subscriber) {
    if (count2 === void 0) {
      count2 = start;
      start = 0;
    }
    var index = 0;
    var current = start;
    if (scheduler) {
      return scheduler.schedule(dispatch7, 0, {
        index,
        count: count2,
        start,
        subscriber
      });
    } else {
      do {
        if (index++ >= count2) {
          subscriber.complete();
          break;
        }
        subscriber.next(current++);
        if (subscriber.closed) {
          break;
        }
      } while (true);
    }
    return void 0;
  });
}
function dispatch7(state) {
  var start = state.start, index = state.index, count2 = state.count, subscriber = state.subscriber;
  if (index >= count2) {
    subscriber.complete();
    return;
  }
  subscriber.next(start);
  if (subscriber.closed) {
    return;
  }
  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}
var init_range = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/range.js"() {
    init_Observable();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/timer.js
function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  var period = -1;
  if (isNumeric(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if (isScheduler(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }
  if (!isScheduler(scheduler)) {
    scheduler = async;
  }
  return new Observable(function(subscriber) {
    var due = isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch8, due, {
      index: 0,
      period,
      subscriber
    });
  });
}
function dispatch8(state) {
  var index = state.index, period = state.period, subscriber = state.subscriber;
  subscriber.next(index);
  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }
  state.index = index + 1;
  this.schedule(state, period);
}
var init_timer = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/timer.js"() {
    init_Observable();
    init_async();
    init_isNumeric();
    init_isScheduler();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/using.js
function using(resourceFactory, observableFactory) {
  return new Observable(function(subscriber) {
    var resource;
    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var result;
    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var source = result ? from(result) : EMPTY;
    var subscription = source.subscribe(subscriber);
    return function() {
      subscription.unsubscribe();
      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
var init_using = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/using.js"() {
    init_Observable();
    init_from();
    init_empty();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/zip.js
function zip() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var resultSelector = observables[observables.length - 1];
  if (typeof resultSelector === "function") {
    observables.pop();
  }
  return fromArray(observables, void 0).lift(new ZipOperator(resultSelector));
}
var ZipOperator, ZipSubscriber, StaticIterator, StaticArrayIterator, ZipBufferIterator;
var init_zip = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/zip.js"() {
    init_tslib_es6();
    init_fromArray();
    init_isArray();
    init_Subscriber();
    init_iterator();
    init_innerSubscribe();
    ZipOperator = function() {
      function ZipOperator2(resultSelector) {
        this.resultSelector = resultSelector;
      }
      ZipOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
      };
      return ZipOperator2;
    }();
    ZipSubscriber = function(_super) {
      __extends(ZipSubscriber2, _super);
      function ZipSubscriber2(destination, resultSelector, values) {
        if (values === void 0) {
          values = /* @__PURE__ */ Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = typeof resultSelector === "function" ? resultSelector : void 0;
        return _this;
      }
      ZipSubscriber2.prototype._next = function(value) {
        var iterators = this.iterators;
        if (isArray(value)) {
          iterators.push(new StaticArrayIterator(value));
        } else if (typeof value[iterator] === "function") {
          iterators.push(new StaticIterator(value[iterator]()));
        } else {
          iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
      };
      ZipSubscriber2.prototype._complete = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
          this.destination.complete();
          return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
          var iterator2 = iterators[i];
          if (iterator2.stillUnsubscribed) {
            var destination = this.destination;
            destination.add(iterator2.subscribe());
          } else {
            this.active--;
          }
        }
      };
      ZipSubscriber2.prototype.notifyInactive = function() {
        this.active--;
        if (this.active === 0) {
          this.destination.complete();
        }
      };
      ZipSubscriber2.prototype.checkIterators = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
          var iterator2 = iterators[i];
          if (typeof iterator2.hasValue === "function" && !iterator2.hasValue()) {
            return;
          }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
          var iterator2 = iterators[i];
          var result = iterator2.next();
          if (iterator2.hasCompleted()) {
            shouldComplete = true;
          }
          if (result.done) {
            destination.complete();
            return;
          }
          args.push(result.value);
        }
        if (this.resultSelector) {
          this._tryresultSelector(args);
        } else {
          destination.next(args);
        }
        if (shouldComplete) {
          destination.complete();
        }
      };
      ZipSubscriber2.prototype._tryresultSelector = function(args) {
        var result;
        try {
          result = this.resultSelector.apply(this, args);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return ZipSubscriber2;
    }(Subscriber);
    StaticIterator = function() {
      function StaticIterator2(iterator2) {
        this.iterator = iterator2;
        this.nextResult = iterator2.next();
      }
      StaticIterator2.prototype.hasValue = function() {
        return true;
      };
      StaticIterator2.prototype.next = function() {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
      };
      StaticIterator2.prototype.hasCompleted = function() {
        var nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
      };
      return StaticIterator2;
    }();
    StaticArrayIterator = function() {
      function StaticArrayIterator2(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
      }
      StaticArrayIterator2.prototype[iterator] = function() {
        return this;
      };
      StaticArrayIterator2.prototype.next = function(value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? {
          value: array[i],
          done: false
        } : {
          value: null,
          done: true
        };
      };
      StaticArrayIterator2.prototype.hasValue = function() {
        return this.array.length > this.index;
      };
      StaticArrayIterator2.prototype.hasCompleted = function() {
        return this.array.length === this.index;
      };
      return StaticArrayIterator2;
    }();
    ZipBufferIterator = function(_super) {
      __extends(ZipBufferIterator2, _super);
      function ZipBufferIterator2(destination, parent, observable2) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable2;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
      }
      ZipBufferIterator2.prototype[iterator] = function() {
        return this;
      };
      ZipBufferIterator2.prototype.next = function() {
        var buffer2 = this.buffer;
        if (buffer2.length === 0 && this.isComplete) {
          return {
            value: null,
            done: true
          };
        } else {
          return {
            value: buffer2.shift(),
            done: false
          };
        }
      };
      ZipBufferIterator2.prototype.hasValue = function() {
        return this.buffer.length > 0;
      };
      ZipBufferIterator2.prototype.hasCompleted = function() {
        return this.buffer.length === 0 && this.isComplete;
      };
      ZipBufferIterator2.prototype.notifyComplete = function() {
        if (this.buffer.length > 0) {
          this.isComplete = true;
          this.parent.notifyInactive();
        } else {
          this.destination.complete();
        }
      };
      ZipBufferIterator2.prototype.notifyNext = function(innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
      };
      ZipBufferIterator2.prototype.subscribe = function() {
        return innerSubscribe(this.observable, new SimpleInnerSubscriber(this));
      };
      return ZipBufferIterator2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/index.js
var esm5_exports = {};
__export(esm5_exports, {
  ArgumentOutOfRangeError: () => ArgumentOutOfRangeError,
  AsyncSubject: () => AsyncSubject,
  BehaviorSubject: () => BehaviorSubject,
  ConnectableObservable: () => ConnectableObservable,
  EMPTY: () => EMPTY,
  EmptyError: () => EmptyError,
  GroupedObservable: () => GroupedObservable,
  NEVER: () => NEVER,
  Notification: () => Notification,
  NotificationKind: () => NotificationKind,
  ObjectUnsubscribedError: () => ObjectUnsubscribedError,
  Observable: () => Observable,
  ReplaySubject: () => ReplaySubject,
  Scheduler: () => Scheduler,
  Subject: () => Subject,
  Subscriber: () => Subscriber,
  Subscription: () => Subscription,
  TimeoutError: () => TimeoutError,
  UnsubscriptionError: () => UnsubscriptionError,
  VirtualAction: () => VirtualAction,
  VirtualTimeScheduler: () => VirtualTimeScheduler,
  animationFrame: () => animationFrame,
  animationFrameScheduler: () => animationFrameScheduler,
  asap: () => asap,
  asapScheduler: () => asapScheduler,
  async: () => async,
  asyncScheduler: () => asyncScheduler,
  bindCallback: () => bindCallback,
  bindNodeCallback: () => bindNodeCallback,
  combineLatest: () => combineLatest,
  concat: () => concat,
  config: () => config,
  defer: () => defer,
  empty: () => empty2,
  forkJoin: () => forkJoin,
  from: () => from,
  fromEvent: () => fromEvent,
  fromEventPattern: () => fromEventPattern,
  generate: () => generate,
  identity: () => identity,
  iif: () => iif,
  interval: () => interval,
  isObservable: () => isObservable,
  merge: () => merge,
  never: () => never,
  noop: () => noop,
  observable: () => observable,
  of: () => of,
  onErrorResumeNext: () => onErrorResumeNext,
  pairs: () => pairs,
  partition: () => partition,
  pipe: () => pipe,
  queue: () => queue,
  queueScheduler: () => queueScheduler,
  race: () => race,
  range: () => range,
  scheduled: () => scheduled,
  throwError: () => throwError,
  timer: () => timer,
  using: () => using,
  zip: () => zip
});
var init_esm5 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/index.js"() {
    init_Observable();
    init_ConnectableObservable();
    init_groupBy();
    init_observable();
    init_Subject();
    init_BehaviorSubject();
    init_ReplaySubject();
    init_AsyncSubject();
    init_asap();
    init_async();
    init_queue();
    init_animationFrame();
    init_VirtualTimeScheduler();
    init_Scheduler();
    init_Subscription();
    init_Subscriber();
    init_Notification();
    init_pipe();
    init_noop();
    init_identity();
    init_isObservable();
    init_ArgumentOutOfRangeError();
    init_EmptyError();
    init_ObjectUnsubscribedError();
    init_UnsubscriptionError();
    init_TimeoutError();
    init_bindCallback();
    init_bindNodeCallback();
    init_combineLatest();
    init_concat();
    init_defer();
    init_empty();
    init_forkJoin();
    init_from();
    init_fromEvent();
    init_fromEventPattern();
    init_generate();
    init_iif();
    init_interval();
    init_merge();
    init_never();
    init_of();
    init_onErrorResumeNext();
    init_pairs();
    init_partition();
    init_race();
    init_range();
    init_throwError();
    init_timer();
    init_using();
    init_zip();
    init_scheduled();
    init_empty();
    init_never();
    init_config();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/audit.js
function audit(durationSelector) {
  return function auditOperatorFunction(source) {
    return source.lift(new AuditOperator(durationSelector));
  };
}
var AuditOperator, AuditSubscriber;
var init_audit = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/audit.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    AuditOperator = function() {
      function AuditOperator2(durationSelector) {
        this.durationSelector = durationSelector;
      }
      AuditOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
      };
      return AuditOperator2;
    }();
    AuditSubscriber = function(_super) {
      __extends(AuditSubscriber2, _super);
      function AuditSubscriber2(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
      }
      AuditSubscriber2.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
          var duration = void 0;
          try {
            var durationSelector = this.durationSelector;
            duration = durationSelector(value);
          } catch (err) {
            return this.destination.error(err);
          }
          var innerSubscription = innerSubscribe(duration, new SimpleInnerSubscriber(this));
          if (!innerSubscription || innerSubscription.closed) {
            this.clearThrottle();
          } else {
            this.add(this.throttled = innerSubscription);
          }
        }
      };
      AuditSubscriber2.prototype.clearThrottle = function() {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
          this.remove(throttled);
          this.throttled = void 0;
          throttled.unsubscribe();
        }
        if (hasValue) {
          this.value = void 0;
          this.hasValue = false;
          this.destination.next(value);
        }
      };
      AuditSubscriber2.prototype.notifyNext = function() {
        this.clearThrottle();
      };
      AuditSubscriber2.prototype.notifyComplete = function() {
        this.clearThrottle();
      };
      return AuditSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/auditTime.js
function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return audit(function() {
    return timer(duration, scheduler);
  });
}
var init_auditTime = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/auditTime.js"() {
    init_async();
    init_audit();
    init_timer();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/buffer.js
function buffer(closingNotifier) {
  return function bufferOperatorFunction(source) {
    return source.lift(new BufferOperator(closingNotifier));
  };
}
var BufferOperator, BufferSubscriber;
var init_buffer = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/buffer.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    BufferOperator = function() {
      function BufferOperator2(closingNotifier) {
        this.closingNotifier = closingNotifier;
      }
      BufferOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
      };
      return BufferOperator2;
    }();
    BufferSubscriber = function(_super) {
      __extends(BufferSubscriber2, _super);
      function BufferSubscriber2(destination, closingNotifier) {
        var _this = _super.call(this, destination) || this;
        _this.buffer = [];
        _this.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(_this)));
        return _this;
      }
      BufferSubscriber2.prototype._next = function(value) {
        this.buffer.push(value);
      };
      BufferSubscriber2.prototype.notifyNext = function() {
        var buffer2 = this.buffer;
        this.buffer = [];
        this.destination.next(buffer2);
      };
      return BufferSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferCount.js
function bufferCount(bufferSize, startBufferEvery) {
  if (startBufferEvery === void 0) {
    startBufferEvery = null;
  }
  return function bufferCountOperatorFunction(source) {
    return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  };
}
var BufferCountOperator, BufferCountSubscriber, BufferSkipCountSubscriber;
var init_bufferCount = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferCount.js"() {
    init_tslib_es6();
    init_Subscriber();
    BufferCountOperator = function() {
      function BufferCountOperator2(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
          this.subscriberClass = BufferCountSubscriber;
        } else {
          this.subscriberClass = BufferSkipCountSubscriber;
        }
      }
      BufferCountOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
      };
      return BufferCountOperator2;
    }();
    BufferCountSubscriber = function(_super) {
      __extends(BufferCountSubscriber2, _super);
      function BufferCountSubscriber2(destination, bufferSize) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.buffer = [];
        return _this;
      }
      BufferCountSubscriber2.prototype._next = function(value) {
        var buffer2 = this.buffer;
        buffer2.push(value);
        if (buffer2.length == this.bufferSize) {
          this.destination.next(buffer2);
          this.buffer = [];
        }
      };
      BufferCountSubscriber2.prototype._complete = function() {
        var buffer2 = this.buffer;
        if (buffer2.length > 0) {
          this.destination.next(buffer2);
        }
        _super.prototype._complete.call(this);
      };
      return BufferCountSubscriber2;
    }(Subscriber);
    BufferSkipCountSubscriber = function(_super) {
      __extends(BufferSkipCountSubscriber2, _super);
      function BufferSkipCountSubscriber2(destination, bufferSize, startBufferEvery) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.startBufferEvery = startBufferEvery;
        _this.buffers = [];
        _this.count = 0;
        return _this;
      }
      BufferSkipCountSubscriber2.prototype._next = function(value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count2 = _a.count;
        this.count++;
        if (count2 % startBufferEvery === 0) {
          buffers.push([]);
        }
        for (var i = buffers.length; i--; ) {
          var buffer2 = buffers[i];
          buffer2.push(value);
          if (buffer2.length === bufferSize) {
            buffers.splice(i, 1);
            this.destination.next(buffer2);
          }
        }
      };
      BufferSkipCountSubscriber2.prototype._complete = function() {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
          var buffer2 = buffers.shift();
          if (buffer2.length > 0) {
            destination.next(buffer2);
          }
        }
        _super.prototype._complete.call(this);
      };
      return BufferSkipCountSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferTime.js
function bufferTime(bufferTimeSpan) {
  var length = arguments.length;
  var scheduler = async;
  if (isScheduler(arguments[arguments.length - 1])) {
    scheduler = arguments[arguments.length - 1];
    length--;
  }
  var bufferCreationInterval = null;
  if (length >= 2) {
    bufferCreationInterval = arguments[1];
  }
  var maxBufferSize = Number.POSITIVE_INFINITY;
  if (length >= 3) {
    maxBufferSize = arguments[2];
  }
  return function bufferTimeOperatorFunction(source) {
    return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
  };
}
function dispatchBufferTimeSpanOnly(state) {
  var subscriber = state.subscriber;
  var prevContext = state.context;
  if (prevContext) {
    subscriber.closeContext(prevContext);
  }
  if (!subscriber.closed) {
    state.context = subscriber.openContext();
    state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
  }
}
function dispatchBufferCreation(state) {
  var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
  var context = subscriber.openContext();
  var action = this;
  if (!subscriber.closed) {
    subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
      subscriber,
      context
    }));
    action.schedule(state, bufferCreationInterval);
  }
}
function dispatchBufferClose(arg) {
  var subscriber = arg.subscriber, context = arg.context;
  subscriber.closeContext(context);
}
var BufferTimeOperator, Context, BufferTimeSubscriber;
var init_bufferTime = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferTime.js"() {
    init_tslib_es6();
    init_async();
    init_Subscriber();
    init_isScheduler();
    BufferTimeOperator = function() {
      function BufferTimeOperator2(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
      }
      BufferTimeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
      };
      return BufferTimeOperator2;
    }();
    Context = /* @__PURE__ */ function() {
      function Context2() {
        this.buffer = [];
      }
      return Context2;
    }();
    BufferTimeSubscriber = function(_super) {
      __extends(BufferTimeSubscriber2, _super);
      function BufferTimeSubscriber2(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.bufferTimeSpan = bufferTimeSpan;
        _this.bufferCreationInterval = bufferCreationInterval;
        _this.maxBufferSize = maxBufferSize;
        _this.scheduler = scheduler;
        _this.contexts = [];
        var context = _this.openContext();
        _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (_this.timespanOnly) {
          var timeSpanOnlyState = {
            subscriber: _this,
            context,
            bufferTimeSpan
          };
          _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        } else {
          var closeState = {
            subscriber: _this,
            context
          };
          var creationState = {
            bufferTimeSpan,
            bufferCreationInterval,
            subscriber: _this,
            scheduler
          };
          _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
          _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
        return _this;
      }
      BufferTimeSubscriber2.prototype._next = function(value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
          var context_1 = contexts[i];
          var buffer2 = context_1.buffer;
          buffer2.push(value);
          if (buffer2.length == this.maxBufferSize) {
            filledBufferContext = context_1;
          }
        }
        if (filledBufferContext) {
          this.onBufferFull(filledBufferContext);
        }
      };
      BufferTimeSubscriber2.prototype._error = function(err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
      };
      BufferTimeSubscriber2.prototype._complete = function() {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
          var context_2 = contexts.shift();
          destination.next(context_2.buffer);
        }
        _super.prototype._complete.call(this);
      };
      BufferTimeSubscriber2.prototype._unsubscribe = function() {
        this.contexts = null;
      };
      BufferTimeSubscriber2.prototype.onBufferFull = function(context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
          context = this.openContext();
          var bufferTimeSpan = this.bufferTimeSpan;
          var timeSpanOnlyState = {
            subscriber: this,
            context,
            bufferTimeSpan
          };
          this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
      };
      BufferTimeSubscriber2.prototype.openContext = function() {
        var context = new Context();
        this.contexts.push(context);
        return context;
      };
      BufferTimeSubscriber2.prototype.closeContext = function(context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
          contexts.splice(contexts.indexOf(context), 1);
        }
      };
      return BufferTimeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferToggle.js
function bufferToggle(openings, closingSelector) {
  return function bufferToggleOperatorFunction(source) {
    return source.lift(new BufferToggleOperator(openings, closingSelector));
  };
}
var BufferToggleOperator, BufferToggleSubscriber;
var init_bufferToggle = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferToggle.js"() {
    init_tslib_es6();
    init_Subscription();
    init_subscribeToResult();
    init_OuterSubscriber();
    BufferToggleOperator = function() {
      function BufferToggleOperator2(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
      }
      BufferToggleOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
      };
      return BufferToggleOperator2;
    }();
    BufferToggleSubscriber = function(_super) {
      __extends(BufferToggleSubscriber2, _super);
      function BufferToggleSubscriber2(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(subscribeToResult(_this, openings));
        return _this;
      }
      BufferToggleSubscriber2.prototype._next = function(value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
          contexts[i].buffer.push(value);
        }
      };
      BufferToggleSubscriber2.prototype._error = function(err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
          var context_1 = contexts.shift();
          context_1.subscription.unsubscribe();
          context_1.buffer = null;
          context_1.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
      };
      BufferToggleSubscriber2.prototype._complete = function() {
        var contexts = this.contexts;
        while (contexts.length > 0) {
          var context_2 = contexts.shift();
          this.destination.next(context_2.buffer);
          context_2.subscription.unsubscribe();
          context_2.buffer = null;
          context_2.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
      };
      BufferToggleSubscriber2.prototype.notifyNext = function(outerValue, innerValue) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
      };
      BufferToggleSubscriber2.prototype.notifyComplete = function(innerSub) {
        this.closeBuffer(innerSub.context);
      };
      BufferToggleSubscriber2.prototype.openBuffer = function(value) {
        try {
          var closingSelector = this.closingSelector;
          var closingNotifier = closingSelector.call(this, value);
          if (closingNotifier) {
            this.trySubscribe(closingNotifier);
          }
        } catch (err) {
          this._error(err);
        }
      };
      BufferToggleSubscriber2.prototype.closeBuffer = function(context) {
        var contexts = this.contexts;
        if (contexts && context) {
          var buffer2 = context.buffer, subscription = context.subscription;
          this.destination.next(buffer2);
          contexts.splice(contexts.indexOf(context), 1);
          this.remove(subscription);
          subscription.unsubscribe();
        }
      };
      BufferToggleSubscriber2.prototype.trySubscribe = function(closingNotifier) {
        var contexts = this.contexts;
        var buffer2 = [];
        var subscription = new Subscription();
        var context = {
          buffer: buffer2,
          subscription
        };
        contexts.push(context);
        var innerSubscription = subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
          this.closeBuffer(context);
        } else {
          innerSubscription.context = context;
          this.add(innerSubscription);
          subscription.add(innerSubscription);
        }
      };
      return BufferToggleSubscriber2;
    }(OuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferWhen.js
function bufferWhen(closingSelector) {
  return function(source) {
    return source.lift(new BufferWhenOperator(closingSelector));
  };
}
var BufferWhenOperator, BufferWhenSubscriber;
var init_bufferWhen = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/bufferWhen.js"() {
    init_tslib_es6();
    init_Subscription();
    init_innerSubscribe();
    BufferWhenOperator = function() {
      function BufferWhenOperator2(closingSelector) {
        this.closingSelector = closingSelector;
      }
      BufferWhenOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
      };
      return BufferWhenOperator2;
    }();
    BufferWhenSubscriber = function(_super) {
      __extends(BufferWhenSubscriber2, _super);
      function BufferWhenSubscriber2(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.subscribing = false;
        _this.openBuffer();
        return _this;
      }
      BufferWhenSubscriber2.prototype._next = function(value) {
        this.buffer.push(value);
      };
      BufferWhenSubscriber2.prototype._complete = function() {
        var buffer2 = this.buffer;
        if (buffer2) {
          this.destination.next(buffer2);
        }
        _super.prototype._complete.call(this);
      };
      BufferWhenSubscriber2.prototype._unsubscribe = function() {
        this.buffer = void 0;
        this.subscribing = false;
      };
      BufferWhenSubscriber2.prototype.notifyNext = function() {
        this.openBuffer();
      };
      BufferWhenSubscriber2.prototype.notifyComplete = function() {
        if (this.subscribing) {
          this.complete();
        } else {
          this.openBuffer();
        }
      };
      BufferWhenSubscriber2.prototype.openBuffer = function() {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
          this.remove(closingSubscription);
          closingSubscription.unsubscribe();
        }
        var buffer2 = this.buffer;
        if (this.buffer) {
          this.destination.next(buffer2);
        }
        this.buffer = [];
        var closingNotifier;
        try {
          var closingSelector = this.closingSelector;
          closingNotifier = closingSelector();
        } catch (err) {
          return this.error(err);
        }
        closingSubscription = new Subscription();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(this)));
        this.subscribing = false;
      };
      return BufferWhenSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/catchError.js
function catchError(selector) {
  return function catchErrorOperatorFunction(source) {
    var operator = new CatchOperator(selector);
    var caught = source.lift(operator);
    return operator.caught = caught;
  };
}
var CatchOperator, CatchSubscriber;
var init_catchError = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/catchError.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    CatchOperator = function() {
      function CatchOperator2(selector) {
        this.selector = selector;
      }
      CatchOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
      };
      return CatchOperator2;
    }();
    CatchSubscriber = function(_super) {
      __extends(CatchSubscriber2, _super);
      function CatchSubscriber2(destination, selector, caught) {
        var _this = _super.call(this, destination) || this;
        _this.selector = selector;
        _this.caught = caught;
        return _this;
      }
      CatchSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var result = void 0;
          try {
            result = this.selector(err, this.caught);
          } catch (err2) {
            _super.prototype.error.call(this, err2);
            return;
          }
          this._unsubscribeAndRecycle();
          var innerSubscriber = new SimpleInnerSubscriber(this);
          this.add(innerSubscriber);
          var innerSubscription = innerSubscribe(result, innerSubscriber);
          if (innerSubscription !== innerSubscriber) {
            this.add(innerSubscription);
          }
        }
      };
      return CatchSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/combineAll.js
function combineAll(project) {
  return function(source) {
    return source.lift(new CombineLatestOperator(project));
  };
}
var init_combineAll = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/combineAll.js"() {
    init_combineLatest();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/combineLatest.js
function combineLatest2() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var project = null;
  if (typeof observables[observables.length - 1] === "function") {
    project = observables.pop();
  }
  if (observables.length === 1 && isArray(observables[0])) {
    observables = observables[0].slice();
  }
  return function(source) {
    return source.lift.call(from([source].concat(observables)), new CombineLatestOperator(project));
  };
}
var init_combineLatest2 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/combineLatest.js"() {
    init_isArray();
    init_combineLatest();
    init_from();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concat.js
function concat2() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function(source) {
    return source.lift.call(concat.apply(void 0, [source].concat(observables)));
  };
}
var init_concat2 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concat.js"() {
    init_concat();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concatMap.js
function concatMap(project, resultSelector) {
  return mergeMap(project, resultSelector, 1);
}
var init_concatMap = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concatMap.js"() {
    init_mergeMap();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concatMapTo.js
function concatMapTo(innerObservable, resultSelector) {
  return concatMap(function() {
    return innerObservable;
  }, resultSelector);
}
var init_concatMapTo = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/concatMapTo.js"() {
    init_concatMap();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/count.js
function count(predicate) {
  return function(source) {
    return source.lift(new CountOperator(predicate, source));
  };
}
var CountOperator, CountSubscriber;
var init_count = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/count.js"() {
    init_tslib_es6();
    init_Subscriber();
    CountOperator = function() {
      function CountOperator2(predicate, source) {
        this.predicate = predicate;
        this.source = source;
      }
      CountOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
      };
      return CountOperator2;
    }();
    CountSubscriber = function(_super) {
      __extends(CountSubscriber2, _super);
      function CountSubscriber2(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.count = 0;
        _this.index = 0;
        return _this;
      }
      CountSubscriber2.prototype._next = function(value) {
        if (this.predicate) {
          this._tryPredicate(value);
        } else {
          this.count++;
        }
      };
      CountSubscriber2.prototype._tryPredicate = function(value) {
        var result;
        try {
          result = this.predicate(value, this.index++, this.source);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.count++;
        }
      };
      CountSubscriber2.prototype._complete = function() {
        this.destination.next(this.count);
        this.destination.complete();
      };
      return CountSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/debounce.js
function debounce(durationSelector) {
  return function(source) {
    return source.lift(new DebounceOperator(durationSelector));
  };
}
var DebounceOperator, DebounceSubscriber;
var init_debounce = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/debounce.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    DebounceOperator = function() {
      function DebounceOperator2(durationSelector) {
        this.durationSelector = durationSelector;
      }
      DebounceOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
      };
      return DebounceOperator2;
    }();
    DebounceSubscriber = function(_super) {
      __extends(DebounceSubscriber2, _super);
      function DebounceSubscriber2(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
      }
      DebounceSubscriber2.prototype._next = function(value) {
        try {
          var result = this.durationSelector.call(this, value);
          if (result) {
            this._tryNext(value, result);
          }
        } catch (err) {
          this.destination.error(err);
        }
      };
      DebounceSubscriber2.prototype._complete = function() {
        this.emitValue();
        this.destination.complete();
      };
      DebounceSubscriber2.prototype._tryNext = function(value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
          subscription.unsubscribe();
          this.remove(subscription);
        }
        subscription = innerSubscribe(duration, new SimpleInnerSubscriber(this));
        if (subscription && !subscription.closed) {
          this.add(this.durationSubscription = subscription);
        }
      };
      DebounceSubscriber2.prototype.notifyNext = function() {
        this.emitValue();
      };
      DebounceSubscriber2.prototype.notifyComplete = function() {
        this.emitValue();
      };
      DebounceSubscriber2.prototype.emitValue = function() {
        if (this.hasValue) {
          var value = this.value;
          var subscription = this.durationSubscription;
          if (subscription) {
            this.durationSubscription = void 0;
            subscription.unsubscribe();
            this.remove(subscription);
          }
          this.value = void 0;
          this.hasValue = false;
          _super.prototype._next.call(this, value);
        }
      };
      return DebounceSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/debounceTime.js
function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    return source.lift(new DebounceTimeOperator(dueTime, scheduler));
  };
}
function dispatchNext3(subscriber) {
  subscriber.debouncedNext();
}
var DebounceTimeOperator, DebounceTimeSubscriber;
var init_debounceTime = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/debounceTime.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_async();
    DebounceTimeOperator = function() {
      function DebounceTimeOperator2(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
      }
      DebounceTimeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
      };
      return DebounceTimeOperator2;
    }();
    DebounceTimeSubscriber = function(_super) {
      __extends(DebounceTimeSubscriber2, _super);
      function DebounceTimeSubscriber2(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
      }
      DebounceTimeSubscriber2.prototype._next = function(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext3, this.dueTime, this));
      };
      DebounceTimeSubscriber2.prototype._complete = function() {
        this.debouncedNext();
        this.destination.complete();
      };
      DebounceTimeSubscriber2.prototype.debouncedNext = function() {
        this.clearDebounce();
        if (this.hasValue) {
          var lastValue = this.lastValue;
          this.lastValue = null;
          this.hasValue = false;
          this.destination.next(lastValue);
        }
      };
      DebounceTimeSubscriber2.prototype.clearDebounce = function() {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
          this.remove(debouncedSubscription);
          debouncedSubscription.unsubscribe();
          this.debouncedSubscription = null;
        }
      };
      return DebounceTimeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js
function defaultIfEmpty(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }
  return function(source) {
    return source.lift(new DefaultIfEmptyOperator(defaultValue));
  };
}
var DefaultIfEmptyOperator, DefaultIfEmptySubscriber;
var init_defaultIfEmpty = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js"() {
    init_tslib_es6();
    init_Subscriber();
    DefaultIfEmptyOperator = function() {
      function DefaultIfEmptyOperator2(defaultValue) {
        this.defaultValue = defaultValue;
      }
      DefaultIfEmptyOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
      };
      return DefaultIfEmptyOperator2;
    }();
    DefaultIfEmptySubscriber = function(_super) {
      __extends(DefaultIfEmptySubscriber2, _super);
      function DefaultIfEmptySubscriber2(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
      }
      DefaultIfEmptySubscriber2.prototype._next = function(value) {
        this.isEmpty = false;
        this.destination.next(value);
      };
      DefaultIfEmptySubscriber2.prototype._complete = function() {
        if (this.isEmpty) {
          this.destination.next(this.defaultValue);
        }
        this.destination.complete();
      };
      return DefaultIfEmptySubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isDate.js
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}
var init_isDate = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/util/isDate.js"() {
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/delay.js
function delay(delay2, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  var absoluteDelay = isDate(delay2);
  var delayFor = absoluteDelay ? +delay2 - scheduler.now() : Math.abs(delay2);
  return function(source) {
    return source.lift(new DelayOperator(delayFor, scheduler));
  };
}
var DelayOperator, DelaySubscriber, DelayMessage;
var init_delay = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/delay.js"() {
    init_tslib_es6();
    init_async();
    init_isDate();
    init_Subscriber();
    init_Notification();
    DelayOperator = function() {
      function DelayOperator2(delay2, scheduler) {
        this.delay = delay2;
        this.scheduler = scheduler;
      }
      DelayOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
      };
      return DelayOperator2;
    }();
    DelaySubscriber = function(_super) {
      __extends(DelaySubscriber2, _super);
      function DelaySubscriber2(destination, delay2, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.delay = delay2;
        _this.scheduler = scheduler;
        _this.queue = [];
        _this.active = false;
        _this.errored = false;
        return _this;
      }
      DelaySubscriber2.dispatch = function(state) {
        var source = state.source;
        var queue2 = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue2.length > 0 && queue2[0].time - scheduler.now() <= 0) {
          queue2.shift().notification.observe(destination);
        }
        if (queue2.length > 0) {
          var delay_1 = Math.max(0, queue2[0].time - scheduler.now());
          this.schedule(state, delay_1);
        } else {
          this.unsubscribe();
          source.active = false;
        }
      };
      DelaySubscriber2.prototype._schedule = function(scheduler) {
        this.active = true;
        var destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber2.dispatch, this.delay, {
          source: this,
          destination: this.destination,
          scheduler
        }));
      };
      DelaySubscriber2.prototype.scheduleNotification = function(notification) {
        if (this.errored === true) {
          return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
          this._schedule(scheduler);
        }
      };
      DelaySubscriber2.prototype._next = function(value) {
        this.scheduleNotification(Notification.createNext(value));
      };
      DelaySubscriber2.prototype._error = function(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
      };
      DelaySubscriber2.prototype._complete = function() {
        this.scheduleNotification(Notification.createComplete());
        this.unsubscribe();
      };
      return DelaySubscriber2;
    }(Subscriber);
    DelayMessage = /* @__PURE__ */ function() {
      function DelayMessage2(time, notification) {
        this.time = time;
        this.notification = notification;
      }
      return DelayMessage2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/delayWhen.js
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function(source) {
      return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    };
  }
  return function(source) {
    return source.lift(new DelayWhenOperator(delayDurationSelector));
  };
}
var DelayWhenOperator, DelayWhenSubscriber, SubscriptionDelayObservable, SubscriptionDelaySubscriber;
var init_delayWhen = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/delayWhen.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Observable();
    init_OuterSubscriber();
    init_subscribeToResult();
    DelayWhenOperator = function() {
      function DelayWhenOperator2(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
      }
      DelayWhenOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
      };
      return DelayWhenOperator2;
    }();
    DelayWhenSubscriber = function(_super) {
      __extends(DelayWhenSubscriber2, _super);
      function DelayWhenSubscriber2(destination, delayDurationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.delayDurationSelector = delayDurationSelector;
        _this.completed = false;
        _this.delayNotifierSubscriptions = [];
        _this.index = 0;
        return _this;
      }
      DelayWhenSubscriber2.prototype.notifyNext = function(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
      };
      DelayWhenSubscriber2.prototype.notifyError = function(error, innerSub) {
        this._error(error);
      };
      DelayWhenSubscriber2.prototype.notifyComplete = function(innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
          this.destination.next(value);
        }
        this.tryComplete();
      };
      DelayWhenSubscriber2.prototype._next = function(value) {
        var index = this.index++;
        try {
          var delayNotifier = this.delayDurationSelector(value, index);
          if (delayNotifier) {
            this.tryDelay(delayNotifier, value);
          }
        } catch (err) {
          this.destination.error(err);
        }
      };
      DelayWhenSubscriber2.prototype._complete = function() {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
      };
      DelayWhenSubscriber2.prototype.removeSubscription = function(subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) {
          this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        }
        return subscription.outerValue;
      };
      DelayWhenSubscriber2.prototype.tryDelay = function(delayNotifier, value) {
        var notifierSubscription = subscribeToResult(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
          var destination = this.destination;
          destination.add(notifierSubscription);
          this.delayNotifierSubscriptions.push(notifierSubscription);
        }
      };
      DelayWhenSubscriber2.prototype.tryComplete = function() {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
          this.destination.complete();
        }
      };
      return DelayWhenSubscriber2;
    }(OuterSubscriber);
    SubscriptionDelayObservable = function(_super) {
      __extends(SubscriptionDelayObservable2, _super);
      function SubscriptionDelayObservable2(source, subscriptionDelay) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subscriptionDelay = subscriptionDelay;
        return _this;
      }
      SubscriptionDelayObservable2.prototype._subscribe = function(subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
      };
      return SubscriptionDelayObservable2;
    }(Observable);
    SubscriptionDelaySubscriber = function(_super) {
      __extends(SubscriptionDelaySubscriber2, _super);
      function SubscriptionDelaySubscriber2(parent, source) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.source = source;
        _this.sourceSubscribed = false;
        return _this;
      }
      SubscriptionDelaySubscriber2.prototype._next = function(unused) {
        this.subscribeToSource();
      };
      SubscriptionDelaySubscriber2.prototype._error = function(err) {
        this.unsubscribe();
        this.parent.error(err);
      };
      SubscriptionDelaySubscriber2.prototype._complete = function() {
        this.unsubscribe();
        this.subscribeToSource();
      };
      SubscriptionDelaySubscriber2.prototype.subscribeToSource = function() {
        if (!this.sourceSubscribed) {
          this.sourceSubscribed = true;
          this.unsubscribe();
          this.source.subscribe(this.parent);
        }
      };
      return SubscriptionDelaySubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/dematerialize.js
function dematerialize() {
  return function dematerializeOperatorFunction(source) {
    return source.lift(new DeMaterializeOperator());
  };
}
var DeMaterializeOperator, DeMaterializeSubscriber;
var init_dematerialize = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/dematerialize.js"() {
    init_tslib_es6();
    init_Subscriber();
    DeMaterializeOperator = function() {
      function DeMaterializeOperator2() {
      }
      DeMaterializeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
      };
      return DeMaterializeOperator2;
    }();
    DeMaterializeSubscriber = function(_super) {
      __extends(DeMaterializeSubscriber2, _super);
      function DeMaterializeSubscriber2(destination) {
        return _super.call(this, destination) || this;
      }
      DeMaterializeSubscriber2.prototype._next = function(value) {
        value.observe(this.destination);
      };
      return DeMaterializeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/distinct.js
function distinct(keySelector, flushes) {
  return function(source) {
    return source.lift(new DistinctOperator(keySelector, flushes));
  };
}
var DistinctOperator, DistinctSubscriber;
var init_distinct = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/distinct.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    DistinctOperator = function() {
      function DistinctOperator2(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
      }
      DistinctOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
      };
      return DistinctOperator2;
    }();
    DistinctSubscriber = function(_super) {
      __extends(DistinctSubscriber2, _super);
      function DistinctSubscriber2(destination, keySelector, flushes) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.values = /* @__PURE__ */ new Set();
        if (flushes) {
          _this.add(innerSubscribe(flushes, new SimpleInnerSubscriber(_this)));
        }
        return _this;
      }
      DistinctSubscriber2.prototype.notifyNext = function() {
        this.values.clear();
      };
      DistinctSubscriber2.prototype.notifyError = function(error) {
        this._error(error);
      };
      DistinctSubscriber2.prototype._next = function(value) {
        if (this.keySelector) {
          this._useKeySelector(value);
        } else {
          this._finalizeNext(value, value);
        }
      };
      DistinctSubscriber2.prototype._useKeySelector = function(value) {
        var key;
        var destination = this.destination;
        try {
          key = this.keySelector(value);
        } catch (err) {
          destination.error(err);
          return;
        }
        this._finalizeNext(key, value);
      };
      DistinctSubscriber2.prototype._finalizeNext = function(key, value) {
        var values = this.values;
        if (!values.has(key)) {
          values.add(key);
          this.destination.next(value);
        }
      };
      return DistinctSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(compare, keySelector) {
  return function(source) {
    return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
  };
}
var DistinctUntilChangedOperator, DistinctUntilChangedSubscriber;
var init_distinctUntilChanged = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js"() {
    init_tslib_es6();
    init_Subscriber();
    DistinctUntilChangedOperator = function() {
      function DistinctUntilChangedOperator2(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
      }
      DistinctUntilChangedOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
      };
      return DistinctUntilChangedOperator2;
    }();
    DistinctUntilChangedSubscriber = function(_super) {
      __extends(DistinctUntilChangedSubscriber2, _super);
      function DistinctUntilChangedSubscriber2(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === "function") {
          _this.compare = compare;
        }
        return _this;
      }
      DistinctUntilChangedSubscriber2.prototype.compare = function(x, y) {
        return x === y;
      };
      DistinctUntilChangedSubscriber2.prototype._next = function(value) {
        var key;
        try {
          var keySelector = this.keySelector;
          key = keySelector ? keySelector(value) : value;
        } catch (err) {
          return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) {
          try {
            var compare = this.compare;
            result = compare(this.key, key);
          } catch (err) {
            return this.destination.error(err);
          }
        } else {
          this.hasKey = true;
        }
        if (!result) {
          this.key = key;
          this.destination.next(value);
        }
      };
      return DistinctUntilChangedSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/distinctUntilKeyChanged.js
function distinctUntilKeyChanged(key, compare) {
  return distinctUntilChanged(function(x, y) {
    return compare ? compare(x[key], y[key]) : x[key] === y[key];
  });
}
var init_distinctUntilKeyChanged = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/distinctUntilKeyChanged.js"() {
    init_distinctUntilChanged();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js
function throwIfEmpty(errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }
  return function(source) {
    return source.lift(new ThrowIfEmptyOperator(errorFactory));
  };
}
function defaultErrorFactory() {
  return new EmptyError();
}
var ThrowIfEmptyOperator, ThrowIfEmptySubscriber;
var init_throwIfEmpty = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js"() {
    init_tslib_es6();
    init_EmptyError();
    init_Subscriber();
    ThrowIfEmptyOperator = function() {
      function ThrowIfEmptyOperator2(errorFactory) {
        this.errorFactory = errorFactory;
      }
      ThrowIfEmptyOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
      };
      return ThrowIfEmptyOperator2;
    }();
    ThrowIfEmptySubscriber = function(_super) {
      __extends(ThrowIfEmptySubscriber2, _super);
      function ThrowIfEmptySubscriber2(destination, errorFactory) {
        var _this = _super.call(this, destination) || this;
        _this.errorFactory = errorFactory;
        _this.hasValue = false;
        return _this;
      }
      ThrowIfEmptySubscriber2.prototype._next = function(value) {
        this.hasValue = true;
        this.destination.next(value);
      };
      ThrowIfEmptySubscriber2.prototype._complete = function() {
        if (!this.hasValue) {
          var err = void 0;
          try {
            err = this.errorFactory();
          } catch (e) {
            err = e;
          }
          this.destination.error(err);
        } else {
          return this.destination.complete();
        }
      };
      return ThrowIfEmptySubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/take.js
function take(count2) {
  return function(source) {
    if (count2 === 0) {
      return empty2();
    } else {
      return source.lift(new TakeOperator(count2));
    }
  };
}
var TakeOperator, TakeSubscriber;
var init_take = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/take.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_ArgumentOutOfRangeError();
    init_empty();
    TakeOperator = function() {
      function TakeOperator2(total) {
        this.total = total;
        if (this.total < 0) {
          throw new ArgumentOutOfRangeError();
        }
      }
      TakeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
      };
      return TakeOperator2;
    }();
    TakeSubscriber = function(_super) {
      __extends(TakeSubscriber2, _super);
      function TakeSubscriber2(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
      }
      TakeSubscriber2.prototype._next = function(value) {
        var total = this.total;
        var count2 = ++this.count;
        if (count2 <= total) {
          this.destination.next(value);
          if (count2 === total) {
            this.destination.complete();
            this.unsubscribe();
          }
        }
      };
      return TakeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/elementAt.js
function elementAt(index, defaultValue) {
  if (index < 0) {
    throw new ArgumentOutOfRangeError();
  }
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(filter(function(v, i) {
      return i === index;
    }), take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new ArgumentOutOfRangeError();
    }));
  };
}
var init_elementAt = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/elementAt.js"() {
    init_ArgumentOutOfRangeError();
    init_filter();
    init_throwIfEmpty();
    init_defaultIfEmpty();
    init_take();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/endWith.js
function endWith() {
  var array = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }
  return function(source) {
    return concat(source, of.apply(void 0, array));
  };
}
var init_endWith = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/endWith.js"() {
    init_concat();
    init_of();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/every.js
function every(predicate, thisArg) {
  return function(source) {
    return source.lift(new EveryOperator(predicate, thisArg, source));
  };
}
var EveryOperator, EverySubscriber;
var init_every = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/every.js"() {
    init_tslib_es6();
    init_Subscriber();
    EveryOperator = function() {
      function EveryOperator2(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
      }
      EveryOperator2.prototype.call = function(observer, source) {
        return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
      };
      return EveryOperator2;
    }();
    EverySubscriber = function(_super) {
      __extends(EverySubscriber2, _super);
      function EverySubscriber2(destination, predicate, thisArg, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.source = source;
        _this.index = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      EverySubscriber2.prototype.notifyComplete = function(everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
      };
      EverySubscriber2.prototype._next = function(value) {
        var result = false;
        try {
          result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (!result) {
          this.notifyComplete(false);
        }
      };
      EverySubscriber2.prototype._complete = function() {
        this.notifyComplete(true);
      };
      return EverySubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/exhaust.js
function exhaust() {
  return function(source) {
    return source.lift(new SwitchFirstOperator());
  };
}
var SwitchFirstOperator, SwitchFirstSubscriber;
var init_exhaust = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/exhaust.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    SwitchFirstOperator = function() {
      function SwitchFirstOperator2() {
      }
      SwitchFirstOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
      };
      return SwitchFirstOperator2;
    }();
    SwitchFirstSubscriber = function(_super) {
      __extends(SwitchFirstSubscriber2, _super);
      function SwitchFirstSubscriber2(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasCompleted = false;
        _this.hasSubscription = false;
        return _this;
      }
      SwitchFirstSubscriber2.prototype._next = function(value) {
        if (!this.hasSubscription) {
          this.hasSubscription = true;
          this.add(innerSubscribe(value, new SimpleInnerSubscriber(this)));
        }
      };
      SwitchFirstSubscriber2.prototype._complete = function() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
          this.destination.complete();
        }
      };
      SwitchFirstSubscriber2.prototype.notifyComplete = function() {
        this.hasSubscription = false;
        if (this.hasCompleted) {
          this.destination.complete();
        }
      };
      return SwitchFirstSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/exhaustMap.js
function exhaustMap(project, resultSelector) {
  if (resultSelector) {
    return function(source) {
      return source.pipe(exhaustMap(function(a, i) {
        return from(project(a, i)).pipe(map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }
  return function(source) {
    return source.lift(new ExhaustMapOperator(project));
  };
}
var ExhaustMapOperator, ExhaustMapSubscriber;
var init_exhaustMap = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/exhaustMap.js"() {
    init_tslib_es6();
    init_map();
    init_from();
    init_innerSubscribe();
    ExhaustMapOperator = function() {
      function ExhaustMapOperator2(project) {
        this.project = project;
      }
      ExhaustMapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
      };
      return ExhaustMapOperator2;
    }();
    ExhaustMapSubscriber = function(_super) {
      __extends(ExhaustMapSubscriber2, _super);
      function ExhaustMapSubscriber2(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.hasSubscription = false;
        _this.hasCompleted = false;
        _this.index = 0;
        return _this;
      }
      ExhaustMapSubscriber2.prototype._next = function(value) {
        if (!this.hasSubscription) {
          this.tryNext(value);
        }
      };
      ExhaustMapSubscriber2.prototype.tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
          result = this.project(value, index);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.hasSubscription = true;
        this._innerSub(result);
      };
      ExhaustMapSubscriber2.prototype._innerSub = function(result) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(result, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
          destination.add(innerSubscription);
        }
      };
      ExhaustMapSubscriber2.prototype._complete = function() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
          this.destination.complete();
        }
        this.unsubscribe();
      };
      ExhaustMapSubscriber2.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
      };
      ExhaustMapSubscriber2.prototype.notifyError = function(err) {
        this.destination.error(err);
      };
      ExhaustMapSubscriber2.prototype.notifyComplete = function() {
        this.hasSubscription = false;
        if (this.hasCompleted) {
          this.destination.complete();
        }
      };
      return ExhaustMapSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/expand.js
function expand(project, concurrent, scheduler) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
  return function(source) {
    return source.lift(new ExpandOperator(project, concurrent, scheduler));
  };
}
var ExpandOperator, ExpandSubscriber;
var init_expand = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/expand.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    ExpandOperator = function() {
      function ExpandOperator2(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
      }
      ExpandOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
      };
      return ExpandOperator2;
    }();
    ExpandSubscriber = function(_super) {
      __extends(ExpandSubscriber2, _super);
      function ExpandSubscriber2(destination, project, concurrent, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.scheduler = scheduler;
        _this.index = 0;
        _this.active = 0;
        _this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
          _this.buffer = [];
        }
        return _this;
      }
      ExpandSubscriber2.dispatch = function(arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
      };
      ExpandSubscriber2.prototype._next = function(value) {
        var destination = this.destination;
        if (destination.closed) {
          this._complete();
          return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
          destination.next(value);
          try {
            var project = this.project;
            var result = project(value, index);
            if (!this.scheduler) {
              this.subscribeToProjection(result, value, index);
            } else {
              var state = {
                subscriber: this,
                result,
                value,
                index
              };
              var destination_1 = this.destination;
              destination_1.add(this.scheduler.schedule(ExpandSubscriber2.dispatch, 0, state));
            }
          } catch (e) {
            destination.error(e);
          }
        } else {
          this.buffer.push(value);
        }
      };
      ExpandSubscriber2.prototype.subscribeToProjection = function(result, value, index) {
        this.active++;
        var destination = this.destination;
        destination.add(innerSubscribe(result, new SimpleInnerSubscriber(this)));
      };
      ExpandSubscriber2.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
          this.destination.complete();
        }
        this.unsubscribe();
      };
      ExpandSubscriber2.prototype.notifyNext = function(innerValue) {
        this._next(innerValue);
      };
      ExpandSubscriber2.prototype.notifyComplete = function() {
        var buffer2 = this.buffer;
        this.active--;
        if (buffer2 && buffer2.length > 0) {
          this._next(buffer2.shift());
        }
        if (this.hasCompleted && this.active === 0) {
          this.destination.complete();
        }
      };
      return ExpandSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/finalize.js
function finalize(callback) {
  return function(source) {
    return source.lift(new FinallyOperator(callback));
  };
}
var FinallyOperator, FinallySubscriber;
var init_finalize = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/finalize.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Subscription();
    FinallyOperator = function() {
      function FinallyOperator2(callback) {
        this.callback = callback;
      }
      FinallyOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
      };
      return FinallyOperator2;
    }();
    FinallySubscriber = function(_super) {
      __extends(FinallySubscriber2, _super);
      function FinallySubscriber2(destination, callback) {
        var _this = _super.call(this, destination) || this;
        _this.add(new Subscription(callback));
        return _this;
      }
      return FinallySubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/find.js
function find(predicate, thisArg) {
  if (typeof predicate !== "function") {
    throw new TypeError("predicate is not a function");
  }
  return function(source) {
    return source.lift(new FindValueOperator(predicate, source, false, thisArg));
  };
}
var FindValueOperator, FindValueSubscriber;
var init_find = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/find.js"() {
    init_tslib_es6();
    init_Subscriber();
    FindValueOperator = function() {
      function FindValueOperator2(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
      }
      FindValueOperator2.prototype.call = function(observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
      };
      return FindValueOperator2;
    }();
    FindValueSubscriber = function(_super) {
      __extends(FindValueSubscriber2, _super);
      function FindValueSubscriber2(destination, predicate, source, yieldIndex, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.yieldIndex = yieldIndex;
        _this.thisArg = thisArg;
        _this.index = 0;
        return _this;
      }
      FindValueSubscriber2.prototype.notifyComplete = function(value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
        this.unsubscribe();
      };
      FindValueSubscriber2.prototype._next = function(value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
          var result = predicate.call(thisArg || this, value, index, this.source);
          if (result) {
            this.notifyComplete(this.yieldIndex ? index : value);
          }
        } catch (err) {
          this.destination.error(err);
        }
      };
      FindValueSubscriber2.prototype._complete = function() {
        this.notifyComplete(this.yieldIndex ? -1 : void 0);
      };
      return FindValueSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/findIndex.js
function findIndex(predicate, thisArg) {
  return function(source) {
    return source.lift(new FindValueOperator(predicate, source, true, thisArg));
  };
}
var init_findIndex = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/findIndex.js"() {
    init_find();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/first.js
function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(predicate ? filter(function(v, i) {
      return predicate(v, i, source);
    }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new EmptyError();
    }));
  };
}
var init_first = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/first.js"() {
    init_EmptyError();
    init_filter();
    init_take();
    init_defaultIfEmpty();
    init_throwIfEmpty();
    init_identity();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/ignoreElements.js
function ignoreElements() {
  return function ignoreElementsOperatorFunction(source) {
    return source.lift(new IgnoreElementsOperator());
  };
}
var IgnoreElementsOperator, IgnoreElementsSubscriber;
var init_ignoreElements = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/ignoreElements.js"() {
    init_tslib_es6();
    init_Subscriber();
    IgnoreElementsOperator = function() {
      function IgnoreElementsOperator2() {
      }
      IgnoreElementsOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
      };
      return IgnoreElementsOperator2;
    }();
    IgnoreElementsSubscriber = function(_super) {
      __extends(IgnoreElementsSubscriber2, _super);
      function IgnoreElementsSubscriber2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      IgnoreElementsSubscriber2.prototype._next = function(unused) {
      };
      return IgnoreElementsSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/isEmpty.js
function isEmpty() {
  return function(source) {
    return source.lift(new IsEmptyOperator());
  };
}
var IsEmptyOperator, IsEmptySubscriber;
var init_isEmpty = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/isEmpty.js"() {
    init_tslib_es6();
    init_Subscriber();
    IsEmptyOperator = function() {
      function IsEmptyOperator2() {
      }
      IsEmptyOperator2.prototype.call = function(observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
      };
      return IsEmptyOperator2;
    }();
    IsEmptySubscriber = function(_super) {
      __extends(IsEmptySubscriber2, _super);
      function IsEmptySubscriber2(destination) {
        return _super.call(this, destination) || this;
      }
      IsEmptySubscriber2.prototype.notifyComplete = function(isEmpty2) {
        var destination = this.destination;
        destination.next(isEmpty2);
        destination.complete();
      };
      IsEmptySubscriber2.prototype._next = function(value) {
        this.notifyComplete(false);
      };
      IsEmptySubscriber2.prototype._complete = function() {
        this.notifyComplete(true);
      };
      return IsEmptySubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/takeLast.js
function takeLast(count2) {
  return function takeLastOperatorFunction(source) {
    if (count2 === 0) {
      return empty2();
    } else {
      return source.lift(new TakeLastOperator(count2));
    }
  };
}
var TakeLastOperator, TakeLastSubscriber;
var init_takeLast = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/takeLast.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_ArgumentOutOfRangeError();
    init_empty();
    TakeLastOperator = function() {
      function TakeLastOperator2(total) {
        this.total = total;
        if (this.total < 0) {
          throw new ArgumentOutOfRangeError();
        }
      }
      TakeLastOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
      };
      return TakeLastOperator2;
    }();
    TakeLastSubscriber = function(_super) {
      __extends(TakeLastSubscriber2, _super);
      function TakeLastSubscriber2(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
      }
      TakeLastSubscriber2.prototype._next = function(value) {
        var ring = this.ring;
        var total = this.total;
        var count2 = this.count++;
        if (ring.length < total) {
          ring.push(value);
        } else {
          var index = count2 % total;
          ring[index] = value;
        }
      };
      TakeLastSubscriber2.prototype._complete = function() {
        var destination = this.destination;
        var count2 = this.count;
        if (count2 > 0) {
          var total = this.count >= this.total ? this.total : this.count;
          var ring = this.ring;
          for (var i = 0; i < total; i++) {
            var idx = count2++ % total;
            destination.next(ring[idx]);
          }
        }
        destination.complete();
      };
      return TakeLastSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/last.js
function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(predicate ? filter(function(v, i) {
      return predicate(v, i, source);
    }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new EmptyError();
    }));
  };
}
var init_last = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/last.js"() {
    init_EmptyError();
    init_filter();
    init_takeLast();
    init_throwIfEmpty();
    init_defaultIfEmpty();
    init_identity();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mapTo.js
function mapTo(value) {
  return function(source) {
    return source.lift(new MapToOperator(value));
  };
}
var MapToOperator, MapToSubscriber;
var init_mapTo = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mapTo.js"() {
    init_tslib_es6();
    init_Subscriber();
    MapToOperator = function() {
      function MapToOperator2(value) {
        this.value = value;
      }
      MapToOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
      };
      return MapToOperator2;
    }();
    MapToSubscriber = function(_super) {
      __extends(MapToSubscriber2, _super);
      function MapToSubscriber2(destination, value) {
        var _this = _super.call(this, destination) || this;
        _this.value = value;
        return _this;
      }
      MapToSubscriber2.prototype._next = function(x) {
        this.destination.next(this.value);
      };
      return MapToSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/materialize.js
function materialize() {
  return function materializeOperatorFunction(source) {
    return source.lift(new MaterializeOperator());
  };
}
var MaterializeOperator, MaterializeSubscriber;
var init_materialize = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/materialize.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Notification();
    MaterializeOperator = function() {
      function MaterializeOperator2() {
      }
      MaterializeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
      };
      return MaterializeOperator2;
    }();
    MaterializeSubscriber = function(_super) {
      __extends(MaterializeSubscriber2, _super);
      function MaterializeSubscriber2(destination) {
        return _super.call(this, destination) || this;
      }
      MaterializeSubscriber2.prototype._next = function(value) {
        this.destination.next(Notification.createNext(value));
      };
      MaterializeSubscriber2.prototype._error = function(err) {
        var destination = this.destination;
        destination.next(Notification.createError(err));
        destination.complete();
      };
      MaterializeSubscriber2.prototype._complete = function() {
        var destination = this.destination;
        destination.next(Notification.createComplete());
        destination.complete();
      };
      return MaterializeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/scan.js
function scan(accumulator, seed) {
  var hasSeed = false;
  if (arguments.length >= 2) {
    hasSeed = true;
  }
  return function scanOperatorFunction(source) {
    return source.lift(new ScanOperator(accumulator, seed, hasSeed));
  };
}
var ScanOperator, ScanSubscriber;
var init_scan = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/scan.js"() {
    init_tslib_es6();
    init_Subscriber();
    ScanOperator = function() {
      function ScanOperator2(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) {
          hasSeed = false;
        }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
      }
      ScanOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
      };
      return ScanOperator2;
    }();
    ScanSubscriber = function(_super) {
      __extends(ScanSubscriber2, _super);
      function ScanSubscriber2(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
      }
      Object.defineProperty(ScanSubscriber2.prototype, "seed", {
        get: function() {
          return this._seed;
        },
        set: function(value) {
          this.hasSeed = true;
          this._seed = value;
        },
        enumerable: true,
        configurable: true
      });
      ScanSubscriber2.prototype._next = function(value) {
        if (!this.hasSeed) {
          this.seed = value;
          this.destination.next(value);
        } else {
          return this._tryNext(value);
        }
      };
      ScanSubscriber2.prototype._tryNext = function(value) {
        var index = this.index++;
        var result;
        try {
          result = this.accumulator(this.seed, value, index);
        } catch (err) {
          this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
      };
      return ScanSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/reduce.js
function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
    };
  }
  return function reduceOperatorFunction(source) {
    return pipe(scan(function(acc, value, index) {
      return accumulator(acc, value, index + 1);
    }), takeLast(1))(source);
  };
}
var init_reduce = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/reduce.js"() {
    init_scan();
    init_takeLast();
    init_defaultIfEmpty();
    init_pipe();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/max.js
function max(comparer) {
  var max2 = typeof comparer === "function" ? function(x, y) {
    return comparer(x, y) > 0 ? x : y;
  } : function(x, y) {
    return x > y ? x : y;
  };
  return reduce(max2);
}
var init_max = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/max.js"() {
    init_reduce();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/merge.js
function merge2() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function(source) {
    return source.lift.call(merge.apply(void 0, [source].concat(observables)));
  };
}
var init_merge2 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/merge.js"() {
    init_merge();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeMapTo.js
function mergeMapTo(innerObservable, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  if (typeof resultSelector === "function") {
    return mergeMap(function() {
      return innerObservable;
    }, resultSelector, concurrent);
  }
  if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return mergeMap(function() {
    return innerObservable;
  }, concurrent);
}
var init_mergeMapTo = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeMapTo.js"() {
    init_mergeMap();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeScan.js
function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  return function(source) {
    return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
  };
}
var MergeScanOperator, MergeScanSubscriber;
var init_mergeScan = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/mergeScan.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    MergeScanOperator = function() {
      function MergeScanOperator2(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
      }
      MergeScanOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
      };
      return MergeScanOperator2;
    }();
    MergeScanSubscriber = function(_super) {
      __extends(MergeScanSubscriber2, _super);
      function MergeScanSubscriber2(destination, accumulator, acc, concurrent) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this.acc = acc;
        _this.concurrent = concurrent;
        _this.hasValue = false;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
      }
      MergeScanSubscriber2.prototype._next = function(value) {
        if (this.active < this.concurrent) {
          var index = this.index++;
          var destination = this.destination;
          var ish = void 0;
          try {
            var accumulator = this.accumulator;
            ish = accumulator(this.acc, value, index);
          } catch (e) {
            return destination.error(e);
          }
          this.active++;
          this._innerSub(ish);
        } else {
          this.buffer.push(value);
        }
      };
      MergeScanSubscriber2.prototype._innerSub = function(ish) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
          destination.add(innerSubscription);
        }
      };
      MergeScanSubscriber2.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
          if (this.hasValue === false) {
            this.destination.next(this.acc);
          }
          this.destination.complete();
        }
        this.unsubscribe();
      };
      MergeScanSubscriber2.prototype.notifyNext = function(innerValue) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
      };
      MergeScanSubscriber2.prototype.notifyComplete = function() {
        var buffer2 = this.buffer;
        this.active--;
        if (buffer2.length > 0) {
          this._next(buffer2.shift());
        } else if (this.active === 0 && this.hasCompleted) {
          if (this.hasValue === false) {
            this.destination.next(this.acc);
          }
          this.destination.complete();
        }
      };
      return MergeScanSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/min.js
function min(comparer) {
  var min2 = typeof comparer === "function" ? function(x, y) {
    return comparer(x, y) < 0 ? x : y;
  } : function(x, y) {
    return x < y ? x : y;
  };
  return reduce(min2);
}
var init_min = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/min.js"() {
    init_reduce();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/multicast.js
function multicast(subjectOrSubjectFactory, selector) {
  return function multicastOperatorFunction(source) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === "function") {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory2() {
        return subjectOrSubjectFactory;
      };
    }
    if (typeof selector === "function") {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }
    var connectable = Object.create(source, connectableObservableDescriptor);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  };
}
var MulticastOperator;
var init_multicast = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/multicast.js"() {
    init_ConnectableObservable();
    MulticastOperator = function() {
      function MulticastOperator2(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
      }
      MulticastOperator2.prototype.call = function(subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
      };
      return MulticastOperator2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/onErrorResumeNext.js
function onErrorResumeNext2() {
  var nextSources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }
  if (nextSources.length === 1 && isArray(nextSources[0])) {
    nextSources = nextSources[0];
  }
  return function(source) {
    return source.lift(new OnErrorResumeNextOperator(nextSources));
  };
}
var OnErrorResumeNextOperator, OnErrorResumeNextSubscriber;
var init_onErrorResumeNext2 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/onErrorResumeNext.js"() {
    init_tslib_es6();
    init_from();
    init_isArray();
    init_innerSubscribe();
    OnErrorResumeNextOperator = function() {
      function OnErrorResumeNextOperator2(nextSources) {
        this.nextSources = nextSources;
      }
      OnErrorResumeNextOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
      };
      return OnErrorResumeNextOperator2;
    }();
    OnErrorResumeNextSubscriber = function(_super) {
      __extends(OnErrorResumeNextSubscriber2, _super);
      function OnErrorResumeNextSubscriber2(destination, nextSources) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.nextSources = nextSources;
        return _this;
      }
      OnErrorResumeNextSubscriber2.prototype.notifyError = function() {
        this.subscribeToNextSource();
      };
      OnErrorResumeNextSubscriber2.prototype.notifyComplete = function() {
        this.subscribeToNextSource();
      };
      OnErrorResumeNextSubscriber2.prototype._error = function(err) {
        this.subscribeToNextSource();
        this.unsubscribe();
      };
      OnErrorResumeNextSubscriber2.prototype._complete = function() {
        this.subscribeToNextSource();
        this.unsubscribe();
      };
      OnErrorResumeNextSubscriber2.prototype.subscribeToNextSource = function() {
        var next = this.nextSources.shift();
        if (!!next) {
          var innerSubscriber = new SimpleInnerSubscriber(this);
          var destination = this.destination;
          destination.add(innerSubscriber);
          var innerSubscription = innerSubscribe(next, innerSubscriber);
          if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
          }
        } else {
          this.destination.complete();
        }
      };
      return OnErrorResumeNextSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/pairwise.js
function pairwise() {
  return function(source) {
    return source.lift(new PairwiseOperator());
  };
}
var PairwiseOperator, PairwiseSubscriber;
var init_pairwise = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/pairwise.js"() {
    init_tslib_es6();
    init_Subscriber();
    PairwiseOperator = function() {
      function PairwiseOperator2() {
      }
      PairwiseOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
      };
      return PairwiseOperator2;
    }();
    PairwiseSubscriber = function(_super) {
      __extends(PairwiseSubscriber2, _super);
      function PairwiseSubscriber2(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasPrev = false;
        return _this;
      }
      PairwiseSubscriber2.prototype._next = function(value) {
        var pair;
        if (this.hasPrev) {
          pair = [this.prev, value];
        } else {
          this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
          this.destination.next(pair);
        }
      };
      return PairwiseSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/partition.js
function partition2(predicate, thisArg) {
  return function(source) {
    return [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
  };
}
var init_partition2 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/partition.js"() {
    init_not();
    init_filter();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/pluck.js
function pluck() {
  var properties = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    properties[_i] = arguments[_i];
  }
  var length = properties.length;
  if (length === 0) {
    throw new Error("list of properties cannot be empty.");
  }
  return function(source) {
    return map(plucker(properties, length))(source);
  };
}
function plucker(props, length) {
  var mapper = function(x) {
    var currentProp = x;
    for (var i = 0; i < length; i++) {
      var p = currentProp != null ? currentProp[props[i]] : void 0;
      if (p !== void 0) {
        currentProp = p;
      } else {
        return void 0;
      }
    }
    return currentProp;
  };
  return mapper;
}
var init_pluck = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/pluck.js"() {
    init_map();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publish.js
function publish(selector) {
  return selector ? multicast(function() {
    return new Subject();
  }, selector) : multicast(new Subject());
}
var init_publish = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publish.js"() {
    init_Subject();
    init_multicast();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publishBehavior.js
function publishBehavior(value) {
  return function(source) {
    return multicast(new BehaviorSubject(value))(source);
  };
}
var init_publishBehavior = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publishBehavior.js"() {
    init_BehaviorSubject();
    init_multicast();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publishLast.js
function publishLast() {
  return function(source) {
    return multicast(new AsyncSubject())(source);
  };
}
var init_publishLast = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publishLast.js"() {
    init_AsyncSubject();
    init_multicast();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publishReplay.js
function publishReplay(bufferSize, windowTime2, selectorOrScheduler, scheduler) {
  if (selectorOrScheduler && typeof selectorOrScheduler !== "function") {
    scheduler = selectorOrScheduler;
  }
  var selector = typeof selectorOrScheduler === "function" ? selectorOrScheduler : void 0;
  var subject = new ReplaySubject(bufferSize, windowTime2, scheduler);
  return function(source) {
    return multicast(function() {
      return subject;
    }, selector)(source);
  };
}
var init_publishReplay = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/publishReplay.js"() {
    init_ReplaySubject();
    init_multicast();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/race.js
function race2() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function raceOperatorFunction(source) {
    if (observables.length === 1 && isArray(observables[0])) {
      observables = observables[0];
    }
    return source.lift.call(race.apply(void 0, [source].concat(observables)));
  };
}
var init_race2 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/race.js"() {
    init_isArray();
    init_race();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/repeat.js
function repeat(count2) {
  if (count2 === void 0) {
    count2 = -1;
  }
  return function(source) {
    if (count2 === 0) {
      return empty2();
    } else if (count2 < 0) {
      return source.lift(new RepeatOperator(-1, source));
    } else {
      return source.lift(new RepeatOperator(count2 - 1, source));
    }
  };
}
var RepeatOperator, RepeatSubscriber;
var init_repeat = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/repeat.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_empty();
    RepeatOperator = function() {
      function RepeatOperator2(count2, source) {
        this.count = count2;
        this.source = source;
      }
      RepeatOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
      };
      return RepeatOperator2;
    }();
    RepeatSubscriber = function(_super) {
      __extends(RepeatSubscriber2, _super);
      function RepeatSubscriber2(destination, count2, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count2;
        _this.source = source;
        return _this;
      }
      RepeatSubscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          var _a = this, source = _a.source, count2 = _a.count;
          if (count2 === 0) {
            return _super.prototype.complete.call(this);
          } else if (count2 > -1) {
            this.count = count2 - 1;
          }
          source.subscribe(this._unsubscribeAndRecycle());
        }
      };
      return RepeatSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/repeatWhen.js
function repeatWhen(notifier) {
  return function(source) {
    return source.lift(new RepeatWhenOperator(notifier));
  };
}
var RepeatWhenOperator, RepeatWhenSubscriber;
var init_repeatWhen = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/repeatWhen.js"() {
    init_tslib_es6();
    init_Subject();
    init_innerSubscribe();
    RepeatWhenOperator = function() {
      function RepeatWhenOperator2(notifier) {
        this.notifier = notifier;
      }
      RepeatWhenOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
      };
      return RepeatWhenOperator2;
    }();
    RepeatWhenSubscriber = function(_super) {
      __extends(RepeatWhenSubscriber2, _super);
      function RepeatWhenSubscriber2(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        _this.sourceIsBeingSubscribedTo = true;
        return _this;
      }
      RepeatWhenSubscriber2.prototype.notifyNext = function() {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
      };
      RepeatWhenSubscriber2.prototype.notifyComplete = function() {
        if (this.sourceIsBeingSubscribedTo === false) {
          return _super.prototype.complete.call(this);
        }
      };
      RepeatWhenSubscriber2.prototype.complete = function() {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
          if (!this.retries) {
            this.subscribeToRetries();
          }
          if (!this.retriesSubscription || this.retriesSubscription.closed) {
            return _super.prototype.complete.call(this);
          }
          this._unsubscribeAndRecycle();
          this.notifications.next(void 0);
        }
      };
      RepeatWhenSubscriber2.prototype._unsubscribe = function() {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
          notifications.unsubscribe();
          this.notifications = void 0;
        }
        if (retriesSubscription) {
          retriesSubscription.unsubscribe();
          this.retriesSubscription = void 0;
        }
        this.retries = void 0;
      };
      RepeatWhenSubscriber2.prototype._unsubscribeAndRecycle = function() {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this._unsubscribe = _unsubscribe;
        return this;
      };
      RepeatWhenSubscriber2.prototype.subscribeToRetries = function() {
        this.notifications = new Subject();
        var retries;
        try {
          var notifier = this.notifier;
          retries = notifier(this.notifications);
        } catch (e) {
          return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
      };
      return RepeatWhenSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/retry.js
function retry(count2) {
  if (count2 === void 0) {
    count2 = -1;
  }
  return function(source) {
    return source.lift(new RetryOperator(count2, source));
  };
}
var RetryOperator, RetrySubscriber;
var init_retry = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/retry.js"() {
    init_tslib_es6();
    init_Subscriber();
    RetryOperator = function() {
      function RetryOperator2(count2, source) {
        this.count = count2;
        this.source = source;
      }
      RetryOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
      };
      return RetryOperator2;
    }();
    RetrySubscriber = function(_super) {
      __extends(RetrySubscriber2, _super);
      function RetrySubscriber2(destination, count2, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count2;
        _this.source = source;
        return _this;
      }
      RetrySubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _a = this, source = _a.source, count2 = _a.count;
          if (count2 === 0) {
            return _super.prototype.error.call(this, err);
          } else if (count2 > -1) {
            this.count = count2 - 1;
          }
          source.subscribe(this._unsubscribeAndRecycle());
        }
      };
      return RetrySubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/retryWhen.js
function retryWhen(notifier) {
  return function(source) {
    return source.lift(new RetryWhenOperator(notifier, source));
  };
}
var RetryWhenOperator, RetryWhenSubscriber;
var init_retryWhen = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/retryWhen.js"() {
    init_tslib_es6();
    init_Subject();
    init_innerSubscribe();
    RetryWhenOperator = function() {
      function RetryWhenOperator2(notifier, source) {
        this.notifier = notifier;
        this.source = source;
      }
      RetryWhenOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
      };
      return RetryWhenOperator2;
    }();
    RetryWhenSubscriber = function(_super) {
      __extends(RetryWhenSubscriber2, _super);
      function RetryWhenSubscriber2(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        return _this;
      }
      RetryWhenSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var errors = this.errors;
          var retries = this.retries;
          var retriesSubscription = this.retriesSubscription;
          if (!retries) {
            errors = new Subject();
            try {
              var notifier = this.notifier;
              retries = notifier(errors);
            } catch (e) {
              return _super.prototype.error.call(this, e);
            }
            retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
          } else {
            this.errors = void 0;
            this.retriesSubscription = void 0;
          }
          this._unsubscribeAndRecycle();
          this.errors = errors;
          this.retries = retries;
          this.retriesSubscription = retriesSubscription;
          errors.next(err);
        }
      };
      RetryWhenSubscriber2.prototype._unsubscribe = function() {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
          errors.unsubscribe();
          this.errors = void 0;
        }
        if (retriesSubscription) {
          retriesSubscription.unsubscribe();
          this.retriesSubscription = void 0;
        }
        this.retries = void 0;
      };
      RetryWhenSubscriber2.prototype.notifyNext = function() {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
      };
      return RetryWhenSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/sample.js
function sample(notifier) {
  return function(source) {
    return source.lift(new SampleOperator(notifier));
  };
}
var SampleOperator, SampleSubscriber;
var init_sample = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/sample.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    SampleOperator = function() {
      function SampleOperator2(notifier) {
        this.notifier = notifier;
      }
      SampleOperator2.prototype.call = function(subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(innerSubscribe(this.notifier, new SimpleInnerSubscriber(sampleSubscriber)));
        return subscription;
      };
      return SampleOperator2;
    }();
    SampleSubscriber = function(_super) {
      __extends(SampleSubscriber2, _super);
      function SampleSubscriber2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasValue = false;
        return _this;
      }
      SampleSubscriber2.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
      };
      SampleSubscriber2.prototype.notifyNext = function() {
        this.emitValue();
      };
      SampleSubscriber2.prototype.notifyComplete = function() {
        this.emitValue();
      };
      SampleSubscriber2.prototype.emitValue = function() {
        if (this.hasValue) {
          this.hasValue = false;
          this.destination.next(this.value);
        }
      };
      return SampleSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/sampleTime.js
function sampleTime(period, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    return source.lift(new SampleTimeOperator(period, scheduler));
  };
}
function dispatchNotification(state) {
  var subscriber = state.subscriber, period = state.period;
  subscriber.notifyNext();
  this.schedule(state, period);
}
var SampleTimeOperator, SampleTimeSubscriber;
var init_sampleTime = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/sampleTime.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_async();
    SampleTimeOperator = function() {
      function SampleTimeOperator2(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
      }
      SampleTimeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
      };
      return SampleTimeOperator2;
    }();
    SampleTimeSubscriber = function(_super) {
      __extends(SampleTimeSubscriber2, _super);
      function SampleTimeSubscriber2(destination, period, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.period = period;
        _this.scheduler = scheduler;
        _this.hasValue = false;
        _this.add(scheduler.schedule(dispatchNotification, period, {
          subscriber: _this,
          period
        }));
        return _this;
      }
      SampleTimeSubscriber2.prototype._next = function(value) {
        this.lastValue = value;
        this.hasValue = true;
      };
      SampleTimeSubscriber2.prototype.notifyNext = function() {
        if (this.hasValue) {
          this.hasValue = false;
          this.destination.next(this.lastValue);
        }
      };
      return SampleTimeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/sequenceEqual.js
function sequenceEqual(compareTo, comparator) {
  return function(source) {
    return source.lift(new SequenceEqualOperator(compareTo, comparator));
  };
}
var SequenceEqualOperator, SequenceEqualSubscriber, SequenceEqualCompareToSubscriber;
var init_sequenceEqual = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/sequenceEqual.js"() {
    init_tslib_es6();
    init_Subscriber();
    SequenceEqualOperator = function() {
      function SequenceEqualOperator2(compareTo, comparator) {
        this.compareTo = compareTo;
        this.comparator = comparator;
      }
      SequenceEqualOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
      };
      return SequenceEqualOperator2;
    }();
    SequenceEqualSubscriber = function(_super) {
      __extends(SequenceEqualSubscriber2, _super);
      function SequenceEqualSubscriber2(destination, compareTo, comparator) {
        var _this = _super.call(this, destination) || this;
        _this.compareTo = compareTo;
        _this.comparator = comparator;
        _this._a = [];
        _this._b = [];
        _this._oneComplete = false;
        _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
        return _this;
      }
      SequenceEqualSubscriber2.prototype._next = function(value) {
        if (this._oneComplete && this._b.length === 0) {
          this.emit(false);
        } else {
          this._a.push(value);
          this.checkValues();
        }
      };
      SequenceEqualSubscriber2.prototype._complete = function() {
        if (this._oneComplete) {
          this.emit(this._a.length === 0 && this._b.length === 0);
        } else {
          this._oneComplete = true;
        }
        this.unsubscribe();
      };
      SequenceEqualSubscriber2.prototype.checkValues = function() {
        var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
        while (_a.length > 0 && _b.length > 0) {
          var a = _a.shift();
          var b = _b.shift();
          var areEqual = false;
          try {
            areEqual = comparator ? comparator(a, b) : a === b;
          } catch (e) {
            this.destination.error(e);
          }
          if (!areEqual) {
            this.emit(false);
          }
        }
      };
      SequenceEqualSubscriber2.prototype.emit = function(value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
      };
      SequenceEqualSubscriber2.prototype.nextB = function(value) {
        if (this._oneComplete && this._a.length === 0) {
          this.emit(false);
        } else {
          this._b.push(value);
          this.checkValues();
        }
      };
      SequenceEqualSubscriber2.prototype.completeB = function() {
        if (this._oneComplete) {
          this.emit(this._a.length === 0 && this._b.length === 0);
        } else {
          this._oneComplete = true;
        }
      };
      return SequenceEqualSubscriber2;
    }(Subscriber);
    SequenceEqualCompareToSubscriber = function(_super) {
      __extends(SequenceEqualCompareToSubscriber2, _super);
      function SequenceEqualCompareToSubscriber2(destination, parent) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        return _this;
      }
      SequenceEqualCompareToSubscriber2.prototype._next = function(value) {
        this.parent.nextB(value);
      };
      SequenceEqualCompareToSubscriber2.prototype._error = function(err) {
        this.parent.error(err);
        this.unsubscribe();
      };
      SequenceEqualCompareToSubscriber2.prototype._complete = function() {
        this.parent.completeB();
        this.unsubscribe();
      };
      return SequenceEqualCompareToSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/share.js
function shareSubjectFactory() {
  return new Subject();
}
function share() {
  return function(source) {
    return refCount()(multicast(shareSubjectFactory)(source));
  };
}
var init_share = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/share.js"() {
    init_multicast();
    init_refCount();
    init_Subject();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime2, scheduler) {
  var config2;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    config2 = configOrBufferSize;
  } else {
    config2 = {
      bufferSize: configOrBufferSize,
      windowTime: windowTime2,
      refCount: false,
      scheduler
    };
  }
  return function(source) {
    return source.lift(shareReplayOperator(config2));
  };
}
function shareReplayOperator(_a) {
  var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime2 = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
  var subject;
  var refCount2 = 0;
  var subscription;
  var hasError = false;
  var isComplete = false;
  return function shareReplayOperation(source) {
    refCount2++;
    var innerSub;
    if (!subject || hasError) {
      hasError = false;
      subject = new ReplaySubject(bufferSize, windowTime2, scheduler);
      innerSub = subject.subscribe(this);
      subscription = source.subscribe({
        next: function(value) {
          subject.next(value);
        },
        error: function(err) {
          hasError = true;
          subject.error(err);
        },
        complete: function() {
          isComplete = true;
          subscription = void 0;
          subject.complete();
        }
      });
      if (isComplete) {
        subscription = void 0;
      }
    } else {
      innerSub = subject.subscribe(this);
    }
    this.add(function() {
      refCount2--;
      innerSub.unsubscribe();
      innerSub = void 0;
      if (subscription && !isComplete && useRefCount && refCount2 === 0) {
        subscription.unsubscribe();
        subscription = void 0;
        subject = void 0;
      }
    });
  };
}
var init_shareReplay = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/shareReplay.js"() {
    init_ReplaySubject();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/single.js
function single(predicate) {
  return function(source) {
    return source.lift(new SingleOperator(predicate, source));
  };
}
var SingleOperator, SingleSubscriber;
var init_single = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/single.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_EmptyError();
    SingleOperator = function() {
      function SingleOperator2(predicate, source) {
        this.predicate = predicate;
        this.source = source;
      }
      SingleOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
      };
      return SingleOperator2;
    }();
    SingleSubscriber = function(_super) {
      __extends(SingleSubscriber2, _super);
      function SingleSubscriber2(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.seenValue = false;
        _this.index = 0;
        return _this;
      }
      SingleSubscriber2.prototype.applySingleValue = function(value) {
        if (this.seenValue) {
          this.destination.error("Sequence contains more than one element");
        } else {
          this.seenValue = true;
          this.singleValue = value;
        }
      };
      SingleSubscriber2.prototype._next = function(value) {
        var index = this.index++;
        if (this.predicate) {
          this.tryNext(value, index);
        } else {
          this.applySingleValue(value);
        }
      };
      SingleSubscriber2.prototype.tryNext = function(value, index) {
        try {
          if (this.predicate(value, index, this.source)) {
            this.applySingleValue(value);
          }
        } catch (err) {
          this.destination.error(err);
        }
      };
      SingleSubscriber2.prototype._complete = function() {
        var destination = this.destination;
        if (this.index > 0) {
          destination.next(this.seenValue ? this.singleValue : void 0);
          destination.complete();
        } else {
          destination.error(new EmptyError());
        }
      };
      return SingleSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skip.js
function skip(count2) {
  return function(source) {
    return source.lift(new SkipOperator(count2));
  };
}
var SkipOperator, SkipSubscriber;
var init_skip = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skip.js"() {
    init_tslib_es6();
    init_Subscriber();
    SkipOperator = function() {
      function SkipOperator2(total) {
        this.total = total;
      }
      SkipOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
      };
      return SkipOperator2;
    }();
    SkipSubscriber = function(_super) {
      __extends(SkipSubscriber2, _super);
      function SkipSubscriber2(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
      }
      SkipSubscriber2.prototype._next = function(x) {
        if (++this.count > this.total) {
          this.destination.next(x);
        }
      };
      return SkipSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skipLast.js
function skipLast(count2) {
  return function(source) {
    return source.lift(new SkipLastOperator(count2));
  };
}
var SkipLastOperator, SkipLastSubscriber;
var init_skipLast = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skipLast.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_ArgumentOutOfRangeError();
    SkipLastOperator = function() {
      function SkipLastOperator2(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
          throw new ArgumentOutOfRangeError();
        }
      }
      SkipLastOperator2.prototype.call = function(subscriber, source) {
        if (this._skipCount === 0) {
          return source.subscribe(new Subscriber(subscriber));
        } else {
          return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
      };
      return SkipLastOperator2;
    }();
    SkipLastSubscriber = function(_super) {
      __extends(SkipLastSubscriber2, _super);
      function SkipLastSubscriber2(destination, _skipCount) {
        var _this = _super.call(this, destination) || this;
        _this._skipCount = _skipCount;
        _this._count = 0;
        _this._ring = new Array(_skipCount);
        return _this;
      }
      SkipLastSubscriber2.prototype._next = function(value) {
        var skipCount = this._skipCount;
        var count2 = this._count++;
        if (count2 < skipCount) {
          this._ring[count2] = value;
        } else {
          var currentIndex = count2 % skipCount;
          var ring = this._ring;
          var oldValue = ring[currentIndex];
          ring[currentIndex] = value;
          this.destination.next(oldValue);
        }
      };
      return SkipLastSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skipUntil.js
function skipUntil(notifier) {
  return function(source) {
    return source.lift(new SkipUntilOperator(notifier));
  };
}
var SkipUntilOperator, SkipUntilSubscriber;
var init_skipUntil = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skipUntil.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    SkipUntilOperator = function() {
      function SkipUntilOperator2(notifier) {
        this.notifier = notifier;
      }
      SkipUntilOperator2.prototype.call = function(destination, source) {
        return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
      };
      return SkipUntilOperator2;
    }();
    SkipUntilSubscriber = function(_super) {
      __extends(SkipUntilSubscriber2, _super);
      function SkipUntilSubscriber2(destination, notifier) {
        var _this = _super.call(this, destination) || this;
        _this.hasValue = false;
        var innerSubscriber = new SimpleInnerSubscriber(_this);
        _this.add(innerSubscriber);
        _this.innerSubscription = innerSubscriber;
        var innerSubscription = innerSubscribe(notifier, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
          _this.add(innerSubscription);
          _this.innerSubscription = innerSubscription;
        }
        return _this;
      }
      SkipUntilSubscriber2.prototype._next = function(value) {
        if (this.hasValue) {
          _super.prototype._next.call(this, value);
        }
      };
      SkipUntilSubscriber2.prototype.notifyNext = function() {
        this.hasValue = true;
        if (this.innerSubscription) {
          this.innerSubscription.unsubscribe();
        }
      };
      SkipUntilSubscriber2.prototype.notifyComplete = function() {
      };
      return SkipUntilSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skipWhile.js
function skipWhile(predicate) {
  return function(source) {
    return source.lift(new SkipWhileOperator(predicate));
  };
}
var SkipWhileOperator, SkipWhileSubscriber;
var init_skipWhile = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/skipWhile.js"() {
    init_tslib_es6();
    init_Subscriber();
    SkipWhileOperator = function() {
      function SkipWhileOperator2(predicate) {
        this.predicate = predicate;
      }
      SkipWhileOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
      };
      return SkipWhileOperator2;
    }();
    SkipWhileSubscriber = function(_super) {
      __extends(SkipWhileSubscriber2, _super);
      function SkipWhileSubscriber2(destination, predicate) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.skipping = true;
        _this.index = 0;
        return _this;
      }
      SkipWhileSubscriber2.prototype._next = function(value) {
        var destination = this.destination;
        if (this.skipping) {
          this.tryCallPredicate(value);
        }
        if (!this.skipping) {
          destination.next(value);
        }
      };
      SkipWhileSubscriber2.prototype.tryCallPredicate = function(value) {
        try {
          var result = this.predicate(value, this.index++);
          this.skipping = Boolean(result);
        } catch (err) {
          this.destination.error(err);
        }
      };
      return SkipWhileSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/startWith.js
function startWith() {
  var array = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }
  var scheduler = array[array.length - 1];
  if (isScheduler(scheduler)) {
    array.pop();
    return function(source) {
      return concat(array, source, scheduler);
    };
  } else {
    return function(source) {
      return concat(array, source);
    };
  }
}
var init_startWith = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/startWith.js"() {
    init_concat();
    init_isScheduler();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js
var SubscribeOnObservable;
var init_SubscribeOnObservable = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js"() {
    init_tslib_es6();
    init_Observable();
    init_asap();
    init_isNumeric();
    SubscribeOnObservable = function(_super) {
      __extends(SubscribeOnObservable2, _super);
      function SubscribeOnObservable2(source, delayTime, scheduler) {
        if (delayTime === void 0) {
          delayTime = 0;
        }
        if (scheduler === void 0) {
          scheduler = asap;
        }
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.delayTime = delayTime;
        _this.scheduler = scheduler;
        if (!isNumeric(delayTime) || delayTime < 0) {
          _this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== "function") {
          _this.scheduler = asap;
        }
        return _this;
      }
      SubscribeOnObservable2.create = function(source, delay2, scheduler) {
        if (delay2 === void 0) {
          delay2 = 0;
        }
        if (scheduler === void 0) {
          scheduler = asap;
        }
        return new SubscribeOnObservable2(source, delay2, scheduler);
      };
      SubscribeOnObservable2.dispatch = function(arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
      };
      SubscribeOnObservable2.prototype._subscribe = function(subscriber) {
        var delay2 = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable2.dispatch, delay2, {
          source,
          subscriber
        });
      };
      return SubscribeOnObservable2;
    }(Observable);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return function subscribeOnOperatorFunction(source) {
    return source.lift(new SubscribeOnOperator(scheduler, delay2));
  };
}
var SubscribeOnOperator;
var init_subscribeOn = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/subscribeOn.js"() {
    init_SubscribeOnObservable();
    SubscribeOnOperator = function() {
      function SubscribeOnOperator2(scheduler, delay2) {
        this.scheduler = scheduler;
        this.delay = delay2;
      }
      SubscribeOnOperator2.prototype.call = function(subscriber, source) {
        return new SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
      };
      return SubscribeOnOperator2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/switchMap.js
function switchMap(project, resultSelector) {
  if (typeof resultSelector === "function") {
    return function(source) {
      return source.pipe(switchMap(function(a, i) {
        return from(project(a, i)).pipe(map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }
  return function(source) {
    return source.lift(new SwitchMapOperator(project));
  };
}
var SwitchMapOperator, SwitchMapSubscriber;
var init_switchMap = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/switchMap.js"() {
    init_tslib_es6();
    init_map();
    init_from();
    init_innerSubscribe();
    SwitchMapOperator = function() {
      function SwitchMapOperator2(project) {
        this.project = project;
      }
      SwitchMapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
      };
      return SwitchMapOperator2;
    }();
    SwitchMapSubscriber = function(_super) {
      __extends(SwitchMapSubscriber2, _super);
      function SwitchMapSubscriber2(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.index = 0;
        return _this;
      }
      SwitchMapSubscriber2.prototype._next = function(value) {
        var result;
        var index = this.index++;
        try {
          result = this.project(value, index);
        } catch (error) {
          this.destination.error(error);
          return;
        }
        this._innerSub(result);
      };
      SwitchMapSubscriber2.prototype._innerSub = function(result) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
          innerSubscription.unsubscribe();
        }
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = innerSubscribe(result, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) {
          destination.add(this.innerSubscription);
        }
      };
      SwitchMapSubscriber2.prototype._complete = function() {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
          _super.prototype._complete.call(this);
        }
        this.unsubscribe();
      };
      SwitchMapSubscriber2.prototype._unsubscribe = function() {
        this.innerSubscription = void 0;
      };
      SwitchMapSubscriber2.prototype.notifyComplete = function() {
        this.innerSubscription = void 0;
        if (this.isStopped) {
          _super.prototype._complete.call(this);
        }
      };
      SwitchMapSubscriber2.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
      };
      return SwitchMapSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/switchAll.js
function switchAll() {
  return switchMap(identity);
}
var init_switchAll = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/switchAll.js"() {
    init_switchMap();
    init_identity();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/switchMapTo.js
function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? switchMap(function() {
    return innerObservable;
  }, resultSelector) : switchMap(function() {
    return innerObservable;
  });
}
var init_switchMapTo = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/switchMapTo.js"() {
    init_switchMap();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/takeUntil.js
function takeUntil(notifier) {
  return function(source) {
    return source.lift(new TakeUntilOperator(notifier));
  };
}
var TakeUntilOperator, TakeUntilSubscriber;
var init_takeUntil = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/takeUntil.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    TakeUntilOperator = function() {
      function TakeUntilOperator2(notifier) {
        this.notifier = notifier;
      }
      TakeUntilOperator2.prototype.call = function(subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = innerSubscribe(this.notifier, new SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
          takeUntilSubscriber.add(notifierSubscription);
          return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
      };
      return TakeUntilOperator2;
    }();
    TakeUntilSubscriber = function(_super) {
      __extends(TakeUntilSubscriber2, _super);
      function TakeUntilSubscriber2(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
      }
      TakeUntilSubscriber2.prototype.notifyNext = function() {
        this.seenValue = true;
        this.complete();
      };
      TakeUntilSubscriber2.prototype.notifyComplete = function() {
      };
      return TakeUntilSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/takeWhile.js
function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }
  return function(source) {
    return source.lift(new TakeWhileOperator(predicate, inclusive));
  };
}
var TakeWhileOperator, TakeWhileSubscriber;
var init_takeWhile = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/takeWhile.js"() {
    init_tslib_es6();
    init_Subscriber();
    TakeWhileOperator = function() {
      function TakeWhileOperator2(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
      }
      TakeWhileOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
      };
      return TakeWhileOperator2;
    }();
    TakeWhileSubscriber = function(_super) {
      __extends(TakeWhileSubscriber2, _super);
      function TakeWhileSubscriber2(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
      }
      TakeWhileSubscriber2.prototype._next = function(value) {
        var destination = this.destination;
        var result;
        try {
          result = this.predicate(value, this.index++);
        } catch (err) {
          destination.error(err);
          return;
        }
        this.nextOrComplete(value, result);
      };
      TakeWhileSubscriber2.prototype.nextOrComplete = function(value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
          destination.next(value);
        } else {
          if (this.inclusive) {
            destination.next(value);
          }
          destination.complete();
        }
      };
      return TakeWhileSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/tap.js
function tap(nextOrObserver, error, complete) {
  return function tapOperatorFunction(source) {
    return source.lift(new DoOperator(nextOrObserver, error, complete));
  };
}
var DoOperator, TapSubscriber;
var init_tap = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/tap.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_noop();
    init_isFunction();
    DoOperator = function() {
      function DoOperator2(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
      }
      DoOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
      };
      return DoOperator2;
    }();
    TapSubscriber = function(_super) {
      __extends(TapSubscriber2, _super);
      function TapSubscriber2(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = noop;
        _this._tapError = noop;
        _this._tapComplete = noop;
        _this._tapError = error || noop;
        _this._tapComplete = complete || noop;
        if (isFunction(observerOrNext)) {
          _this._context = _this;
          _this._tapNext = observerOrNext;
        } else if (observerOrNext) {
          _this._context = observerOrNext;
          _this._tapNext = observerOrNext.next || noop;
          _this._tapError = observerOrNext.error || noop;
          _this._tapComplete = observerOrNext.complete || noop;
        }
        return _this;
      }
      TapSubscriber2.prototype._next = function(value) {
        try {
          this._tapNext.call(this._context, value);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(value);
      };
      TapSubscriber2.prototype._error = function(err) {
        try {
          this._tapError.call(this._context, err);
        } catch (err2) {
          this.destination.error(err2);
          return;
        }
        this.destination.error(err);
      };
      TapSubscriber2.prototype._complete = function() {
        try {
          this._tapComplete.call(this._context);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        return this.destination.complete();
      };
      return TapSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/throttle.js
function throttle(durationSelector, config2) {
  if (config2 === void 0) {
    config2 = defaultThrottleConfig;
  }
  return function(source) {
    return source.lift(new ThrottleOperator(durationSelector, !!config2.leading, !!config2.trailing));
  };
}
var defaultThrottleConfig, ThrottleOperator, ThrottleSubscriber;
var init_throttle = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/throttle.js"() {
    init_tslib_es6();
    init_innerSubscribe();
    defaultThrottleConfig = {
      leading: true,
      trailing: false
    };
    ThrottleOperator = function() {
      function ThrottleOperator2(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
      }
      ThrottleOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
      };
      return ThrottleOperator2;
    }();
    ThrottleSubscriber = function(_super) {
      __extends(ThrottleSubscriber2, _super);
      function ThrottleSubscriber2(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
      }
      ThrottleSubscriber2.prototype._next = function(value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
          if (this._leading) {
            this.send();
          } else {
            this.throttle(value);
          }
        }
      };
      ThrottleSubscriber2.prototype.send = function() {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
          this.destination.next(_sendValue);
          this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = void 0;
      };
      ThrottleSubscriber2.prototype.throttle = function(value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) {
          this.add(this._throttled = innerSubscribe(duration, new SimpleInnerSubscriber(this)));
        }
      };
      ThrottleSubscriber2.prototype.tryDurationSelector = function(value) {
        try {
          return this.durationSelector(value);
        } catch (err) {
          this.destination.error(err);
          return null;
        }
      };
      ThrottleSubscriber2.prototype.throttlingDone = function() {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) {
          _throttled.unsubscribe();
        }
        this._throttled = void 0;
        if (_trailing) {
          this.send();
        }
      };
      ThrottleSubscriber2.prototype.notifyNext = function() {
        this.throttlingDone();
      };
      ThrottleSubscriber2.prototype.notifyComplete = function() {
        this.throttlingDone();
      };
      return ThrottleSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/throttleTime.js
function throttleTime(duration, scheduler, config2) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  if (config2 === void 0) {
    config2 = defaultThrottleConfig;
  }
  return function(source) {
    return source.lift(new ThrottleTimeOperator(duration, scheduler, config2.leading, config2.trailing));
  };
}
function dispatchNext4(arg) {
  var subscriber = arg.subscriber;
  subscriber.clearThrottle();
}
var ThrottleTimeOperator, ThrottleTimeSubscriber;
var init_throttleTime = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/throttleTime.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_async();
    init_throttle();
    ThrottleTimeOperator = function() {
      function ThrottleTimeOperator2(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
      }
      ThrottleTimeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
      };
      return ThrottleTimeOperator2;
    }();
    ThrottleTimeSubscriber = function(_super) {
      __extends(ThrottleTimeSubscriber2, _super);
      function ThrottleTimeSubscriber2(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
      }
      ThrottleTimeSubscriber2.prototype._next = function(value) {
        if (this.throttled) {
          if (this.trailing) {
            this._trailingValue = value;
            this._hasTrailingValue = true;
          }
        } else {
          this.add(this.throttled = this.scheduler.schedule(dispatchNext4, this.duration, {
            subscriber: this
          }));
          if (this.leading) {
            this.destination.next(value);
          } else if (this.trailing) {
            this._trailingValue = value;
            this._hasTrailingValue = true;
          }
        }
      };
      ThrottleTimeSubscriber2.prototype._complete = function() {
        if (this._hasTrailingValue) {
          this.destination.next(this._trailingValue);
          this.destination.complete();
        } else {
          this.destination.complete();
        }
      };
      ThrottleTimeSubscriber2.prototype.clearThrottle = function() {
        var throttled = this.throttled;
        if (throttled) {
          if (this.trailing && this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this._trailingValue = null;
            this._hasTrailingValue = false;
          }
          throttled.unsubscribe();
          this.remove(throttled);
          this.throttled = null;
        }
      };
      return ThrottleTimeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timeInterval.js
function timeInterval(scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    return defer(function() {
      return source.pipe(scan(function(_a, value) {
        var current = _a.current;
        return {
          value,
          current: scheduler.now(),
          last: current
        };
      }, {
        current: scheduler.now(),
        value: void 0,
        last: void 0
      }), map(function(_a) {
        var current = _a.current, last2 = _a.last, value = _a.value;
        return new TimeInterval(value, current - last2);
      }));
    });
  };
}
var TimeInterval;
var init_timeInterval = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timeInterval.js"() {
    init_async();
    init_scan();
    init_defer();
    init_map();
    TimeInterval = /* @__PURE__ */ function() {
      function TimeInterval2(value, interval2) {
        this.value = value;
        this.interval = interval2;
      }
      return TimeInterval2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timeoutWith.js
function timeoutWith(due, withObservable, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    var absoluteTimeout = isDate(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  };
}
var TimeoutWithOperator, TimeoutWithSubscriber;
var init_timeoutWith = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timeoutWith.js"() {
    init_tslib_es6();
    init_async();
    init_isDate();
    init_innerSubscribe();
    TimeoutWithOperator = function() {
      function TimeoutWithOperator2(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
      }
      TimeoutWithOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
      };
      return TimeoutWithOperator2;
    }();
    TimeoutWithSubscriber = function(_super) {
      __extends(TimeoutWithSubscriber2, _super);
      function TimeoutWithSubscriber2(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.absoluteTimeout = absoluteTimeout;
        _this.waitFor = waitFor;
        _this.withObservable = withObservable;
        _this.scheduler = scheduler;
        _this.scheduleTimeout();
        return _this;
      }
      TimeoutWithSubscriber2.dispatchTimeout = function(subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(innerSubscribe(withObservable, new SimpleInnerSubscriber(subscriber)));
      };
      TimeoutWithSubscriber2.prototype.scheduleTimeout = function() {
        var action = this.action;
        if (action) {
          this.action = action.schedule(this, this.waitFor);
        } else {
          this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber2.dispatchTimeout, this.waitFor, this));
        }
      };
      TimeoutWithSubscriber2.prototype._next = function(value) {
        if (!this.absoluteTimeout) {
          this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
      };
      TimeoutWithSubscriber2.prototype._unsubscribe = function() {
        this.action = void 0;
        this.scheduler = null;
        this.withObservable = null;
      };
      return TimeoutWithSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timeout.js
function timeout(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}
var init_timeout = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timeout.js"() {
    init_async();
    init_TimeoutError();
    init_timeoutWith();
    init_throwError();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timestamp.js
function timestamp(scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return map(function(value) {
    return new Timestamp(value, scheduler.now());
  });
}
var Timestamp;
var init_timestamp = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/timestamp.js"() {
    init_async();
    init_map();
    Timestamp = /* @__PURE__ */ function() {
      function Timestamp2(value, timestamp2) {
        this.value = value;
        this.timestamp = timestamp2;
      }
      return Timestamp2;
    }();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/toArray.js
function toArrayReducer(arr, item, index) {
  if (index === 0) {
    return [item];
  }
  arr.push(item);
  return arr;
}
function toArray() {
  return reduce(toArrayReducer, []);
}
var init_toArray = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/toArray.js"() {
    init_reduce();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/window.js
function window(windowBoundaries) {
  return function windowOperatorFunction(source) {
    return source.lift(new WindowOperator(windowBoundaries));
  };
}
var WindowOperator, WindowSubscriber;
var init_window = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/window.js"() {
    init_tslib_es6();
    init_Subject();
    init_innerSubscribe();
    WindowOperator = function() {
      function WindowOperator3(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
      }
      WindowOperator3.prototype.call = function(subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
          windowSubscriber.add(innerSubscribe(this.windowBoundaries, new SimpleInnerSubscriber(windowSubscriber)));
        }
        return sourceSubscription;
      };
      return WindowOperator3;
    }();
    WindowSubscriber = function(_super) {
      __extends(WindowSubscriber3, _super);
      function WindowSubscriber3(destination) {
        var _this = _super.call(this, destination) || this;
        _this.window = new Subject();
        destination.next(_this.window);
        return _this;
      }
      WindowSubscriber3.prototype.notifyNext = function() {
        this.openWindow();
      };
      WindowSubscriber3.prototype.notifyError = function(error) {
        this._error(error);
      };
      WindowSubscriber3.prototype.notifyComplete = function() {
        this._complete();
      };
      WindowSubscriber3.prototype._next = function(value) {
        this.window.next(value);
      };
      WindowSubscriber3.prototype._error = function(err) {
        this.window.error(err);
        this.destination.error(err);
      };
      WindowSubscriber3.prototype._complete = function() {
        this.window.complete();
        this.destination.complete();
      };
      WindowSubscriber3.prototype._unsubscribe = function() {
        this.window = null;
      };
      WindowSubscriber3.prototype.openWindow = function() {
        var prevWindow = this.window;
        if (prevWindow) {
          prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new Subject();
        destination.next(newWindow);
      };
      return WindowSubscriber3;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowCount.js
function windowCount(windowSize, startWindowEvery) {
  if (startWindowEvery === void 0) {
    startWindowEvery = 0;
  }
  return function windowCountOperatorFunction(source) {
    return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
  };
}
var WindowCountOperator, WindowCountSubscriber;
var init_windowCount = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowCount.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Subject();
    WindowCountOperator = function() {
      function WindowCountOperator2(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
      }
      WindowCountOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
      };
      return WindowCountOperator2;
    }();
    WindowCountSubscriber = function(_super) {
      __extends(WindowCountSubscriber2, _super);
      function WindowCountSubscriber2(destination, windowSize, startWindowEvery) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowSize = windowSize;
        _this.startWindowEvery = startWindowEvery;
        _this.windows = [new Subject()];
        _this.count = 0;
        destination.next(_this.windows[0]);
        return _this;
      }
      WindowCountSubscriber2.prototype._next = function(value) {
        var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
          windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
          windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
          var window_1 = new Subject();
          windows.push(window_1);
          destination.next(window_1);
        }
      };
      WindowCountSubscriber2.prototype._error = function(err) {
        var windows = this.windows;
        if (windows) {
          while (windows.length > 0 && !this.closed) {
            windows.shift().error(err);
          }
        }
        this.destination.error(err);
      };
      WindowCountSubscriber2.prototype._complete = function() {
        var windows = this.windows;
        if (windows) {
          while (windows.length > 0 && !this.closed) {
            windows.shift().complete();
          }
        }
        this.destination.complete();
      };
      WindowCountSubscriber2.prototype._unsubscribe = function() {
        this.count = 0;
        this.windows = null;
      };
      return WindowCountSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowTime.js
function windowTime(windowTimeSpan) {
  var scheduler = async;
  var windowCreationInterval = null;
  var maxWindowSize = Number.POSITIVE_INFINITY;
  if (isScheduler(arguments[3])) {
    scheduler = arguments[3];
  }
  if (isScheduler(arguments[2])) {
    scheduler = arguments[2];
  } else if (isNumeric(arguments[2])) {
    maxWindowSize = Number(arguments[2]);
  }
  if (isScheduler(arguments[1])) {
    scheduler = arguments[1];
  } else if (isNumeric(arguments[1])) {
    windowCreationInterval = Number(arguments[1]);
  }
  return function windowTimeOperatorFunction(source) {
    return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
  };
}
function dispatchWindowTimeSpanOnly(state) {
  var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window2 = state.window;
  if (window2) {
    subscriber.closeWindow(window2);
  }
  state.window = subscriber.openWindow();
  this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
  var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
  var window2 = subscriber.openWindow();
  var action = this;
  var context = {
    action,
    subscription: null
  };
  var timeSpanState = {
    subscriber,
    window: window2,
    context
  };
  context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
  action.add(context.subscription);
  action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
  var subscriber = state.subscriber, window2 = state.window, context = state.context;
  if (context && context.action && context.subscription) {
    context.action.remove(context.subscription);
  }
  subscriber.closeWindow(window2);
}
var WindowTimeOperator, CountedSubject, WindowTimeSubscriber;
var init_windowTime = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowTime.js"() {
    init_tslib_es6();
    init_Subject();
    init_async();
    init_Subscriber();
    init_isNumeric();
    init_isScheduler();
    WindowTimeOperator = function() {
      function WindowTimeOperator2(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
      }
      WindowTimeOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
      };
      return WindowTimeOperator2;
    }();
    CountedSubject = function(_super) {
      __extends(CountedSubject2, _super);
      function CountedSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._numberOfNextedValues = 0;
        return _this;
      }
      CountedSubject2.prototype.next = function(value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
      };
      Object.defineProperty(CountedSubject2.prototype, "numberOfNextedValues", {
        get: function() {
          return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
      });
      return CountedSubject2;
    }(Subject);
    WindowTimeSubscriber = function(_super) {
      __extends(WindowTimeSubscriber2, _super);
      function WindowTimeSubscriber2(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowTimeSpan = windowTimeSpan;
        _this.windowCreationInterval = windowCreationInterval;
        _this.maxWindowSize = maxWindowSize;
        _this.scheduler = scheduler;
        _this.windows = [];
        var window2 = _this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
          var closeState = {
            subscriber: _this,
            window: window2,
            context: null
          };
          var creationState = {
            windowTimeSpan,
            windowCreationInterval,
            subscriber: _this,
            scheduler
          };
          _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
          _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        } else {
          var timeSpanOnlyState = {
            subscriber: _this,
            window: window2,
            windowTimeSpan
          };
          _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
        return _this;
      }
      WindowTimeSubscriber2.prototype._next = function(value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
          var window_1 = windows[i];
          if (!window_1.closed) {
            window_1.next(value);
            if (window_1.numberOfNextedValues >= this.maxWindowSize) {
              this.closeWindow(window_1);
            }
          }
        }
      };
      WindowTimeSubscriber2.prototype._error = function(err) {
        var windows = this.windows;
        while (windows.length > 0) {
          windows.shift().error(err);
        }
        this.destination.error(err);
      };
      WindowTimeSubscriber2.prototype._complete = function() {
        var windows = this.windows;
        while (windows.length > 0) {
          var window_2 = windows.shift();
          if (!window_2.closed) {
            window_2.complete();
          }
        }
        this.destination.complete();
      };
      WindowTimeSubscriber2.prototype.openWindow = function() {
        var window2 = new CountedSubject();
        this.windows.push(window2);
        var destination = this.destination;
        destination.next(window2);
        return window2;
      };
      WindowTimeSubscriber2.prototype.closeWindow = function(window2) {
        window2.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window2), 1);
      };
      return WindowTimeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowToggle.js
function windowToggle(openings, closingSelector) {
  return function(source) {
    return source.lift(new WindowToggleOperator(openings, closingSelector));
  };
}
var WindowToggleOperator, WindowToggleSubscriber;
var init_windowToggle = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowToggle.js"() {
    init_tslib_es6();
    init_Subject();
    init_Subscription();
    init_OuterSubscriber();
    init_subscribeToResult();
    WindowToggleOperator = function() {
      function WindowToggleOperator2(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
      }
      WindowToggleOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
      };
      return WindowToggleOperator2;
    }();
    WindowToggleSubscriber = function(_super) {
      __extends(WindowToggleSubscriber2, _super);
      function WindowToggleSubscriber2(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.openings = openings;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(_this.openSubscription = subscribeToResult(_this, openings, openings));
        return _this;
      }
      WindowToggleSubscriber2.prototype._next = function(value) {
        var contexts = this.contexts;
        if (contexts) {
          var len = contexts.length;
          for (var i = 0; i < len; i++) {
            contexts[i].window.next(value);
          }
        }
      };
      WindowToggleSubscriber2.prototype._error = function(err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
          var len = contexts.length;
          var index = -1;
          while (++index < len) {
            var context_1 = contexts[index];
            context_1.window.error(err);
            context_1.subscription.unsubscribe();
          }
        }
        _super.prototype._error.call(this, err);
      };
      WindowToggleSubscriber2.prototype._complete = function() {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
          var len = contexts.length;
          var index = -1;
          while (++index < len) {
            var context_2 = contexts[index];
            context_2.window.complete();
            context_2.subscription.unsubscribe();
          }
        }
        _super.prototype._complete.call(this);
      };
      WindowToggleSubscriber2.prototype._unsubscribe = function() {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
          var len = contexts.length;
          var index = -1;
          while (++index < len) {
            var context_3 = contexts[index];
            context_3.window.unsubscribe();
            context_3.subscription.unsubscribe();
          }
        }
      };
      WindowToggleSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
          var closingNotifier = void 0;
          try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector(innerValue);
          } catch (e) {
            return this.error(e);
          }
          var window_1 = new Subject();
          var subscription = new Subscription();
          var context_4 = {
            window: window_1,
            subscription
          };
          this.contexts.push(context_4);
          var innerSubscription = subscribeToResult(this, closingNotifier, context_4);
          if (innerSubscription.closed) {
            this.closeWindow(this.contexts.length - 1);
          } else {
            innerSubscription.context = context_4;
            subscription.add(innerSubscription);
          }
          this.destination.next(window_1);
        } else {
          this.closeWindow(this.contexts.indexOf(outerValue));
        }
      };
      WindowToggleSubscriber2.prototype.notifyError = function(err) {
        this.error(err);
      };
      WindowToggleSubscriber2.prototype.notifyComplete = function(inner) {
        if (inner !== this.openSubscription) {
          this.closeWindow(this.contexts.indexOf(inner.context));
        }
      };
      WindowToggleSubscriber2.prototype.closeWindow = function(index) {
        if (index === -1) {
          return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window2 = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window2.complete();
        subscription.unsubscribe();
      };
      return WindowToggleSubscriber2;
    }(OuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowWhen.js
function windowWhen(closingSelector) {
  return function windowWhenOperatorFunction(source) {
    return source.lift(new WindowOperator2(closingSelector));
  };
}
var WindowOperator2, WindowSubscriber2;
var init_windowWhen = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/windowWhen.js"() {
    init_tslib_es6();
    init_Subject();
    init_OuterSubscriber();
    init_subscribeToResult();
    WindowOperator2 = function() {
      function WindowOperator3(closingSelector) {
        this.closingSelector = closingSelector;
      }
      WindowOperator3.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowSubscriber2(subscriber, this.closingSelector));
      };
      return WindowOperator3;
    }();
    WindowSubscriber2 = function(_super) {
      __extends(WindowSubscriber3, _super);
      function WindowSubscriber3(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.closingSelector = closingSelector;
        _this.openWindow();
        return _this;
      }
      WindowSubscriber3.prototype.notifyNext = function(_outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.openWindow(innerSub);
      };
      WindowSubscriber3.prototype.notifyError = function(error) {
        this._error(error);
      };
      WindowSubscriber3.prototype.notifyComplete = function(innerSub) {
        this.openWindow(innerSub);
      };
      WindowSubscriber3.prototype._next = function(value) {
        this.window.next(value);
      };
      WindowSubscriber3.prototype._error = function(err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
      };
      WindowSubscriber3.prototype._complete = function() {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
      };
      WindowSubscriber3.prototype.unsubscribeClosingNotification = function() {
        if (this.closingNotification) {
          this.closingNotification.unsubscribe();
        }
      };
      WindowSubscriber3.prototype.openWindow = function(innerSub) {
        if (innerSub === void 0) {
          innerSub = null;
        }
        if (innerSub) {
          this.remove(innerSub);
          innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
          prevWindow.complete();
        }
        var window2 = this.window = new Subject();
        this.destination.next(window2);
        var closingNotifier;
        try {
          var closingSelector = this.closingSelector;
          closingNotifier = closingSelector();
        } catch (e) {
          this.destination.error(e);
          this.window.error(e);
          return;
        }
        this.add(this.closingNotification = subscribeToResult(this, closingNotifier));
      };
      return WindowSubscriber3;
    }(OuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js
function withLatestFrom() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return function(source) {
    var project;
    if (typeof args[args.length - 1] === "function") {
      project = args.pop();
    }
    var observables = args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}
var WithLatestFromOperator, WithLatestFromSubscriber;
var init_withLatestFrom = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js"() {
    init_tslib_es6();
    init_OuterSubscriber();
    init_subscribeToResult();
    WithLatestFromOperator = function() {
      function WithLatestFromOperator2(observables, project) {
        this.observables = observables;
        this.project = project;
      }
      WithLatestFromOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
      };
      return WithLatestFromOperator2;
    }();
    WithLatestFromSubscriber = function(_super) {
      __extends(WithLatestFromSubscriber2, _super);
      function WithLatestFromSubscriber2(destination, observables, project) {
        var _this = _super.call(this, destination) || this;
        _this.observables = observables;
        _this.project = project;
        _this.toRespond = [];
        var len = observables.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
          _this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
          var observable2 = observables[i];
          _this.add(subscribeToResult(_this, observable2, void 0, i));
        }
        return _this;
      }
      WithLatestFromSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
          var found = toRespond.indexOf(outerIndex);
          if (found !== -1) {
            toRespond.splice(found, 1);
          }
        }
      };
      WithLatestFromSubscriber2.prototype.notifyComplete = function() {
      };
      WithLatestFromSubscriber2.prototype._next = function(value) {
        if (this.toRespond.length === 0) {
          var args = [value].concat(this.values);
          if (this.project) {
            this._tryProject(args);
          } else {
            this.destination.next(args);
          }
        }
      };
      WithLatestFromSubscriber2.prototype._tryProject = function(args) {
        var result;
        try {
          result = this.project.apply(this, args);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return WithLatestFromSubscriber2;
    }(OuterSubscriber);
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/zip.js
function zip2() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function zipOperatorFunction(source) {
    return source.lift.call(zip.apply(void 0, [source].concat(observables)));
  };
}
var init_zip2 = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/zip.js"() {
    init_zip();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/zipAll.js
function zipAll(project) {
  return function(source) {
    return source.lift(new ZipOperator(project));
  };
}
var init_zipAll = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/internal/operators/zipAll.js"() {
    init_zip();
  }
});

// node_modules/muse-js/node_modules/rxjs/_esm5/operators/index.js
var operators_exports = {};
__export(operators_exports, {
  audit: () => audit,
  auditTime: () => auditTime,
  buffer: () => buffer,
  bufferCount: () => bufferCount,
  bufferTime: () => bufferTime,
  bufferToggle: () => bufferToggle,
  bufferWhen: () => bufferWhen,
  catchError: () => catchError,
  combineAll: () => combineAll,
  combineLatest: () => combineLatest2,
  concat: () => concat2,
  concatAll: () => concatAll,
  concatMap: () => concatMap,
  concatMapTo: () => concatMapTo,
  count: () => count,
  debounce: () => debounce,
  debounceTime: () => debounceTime,
  defaultIfEmpty: () => defaultIfEmpty,
  delay: () => delay,
  delayWhen: () => delayWhen,
  dematerialize: () => dematerialize,
  distinct: () => distinct,
  distinctUntilChanged: () => distinctUntilChanged,
  distinctUntilKeyChanged: () => distinctUntilKeyChanged,
  elementAt: () => elementAt,
  endWith: () => endWith,
  every: () => every,
  exhaust: () => exhaust,
  exhaustMap: () => exhaustMap,
  expand: () => expand,
  filter: () => filter,
  finalize: () => finalize,
  find: () => find,
  findIndex: () => findIndex,
  first: () => first,
  flatMap: () => flatMap,
  groupBy: () => groupBy,
  ignoreElements: () => ignoreElements,
  isEmpty: () => isEmpty,
  last: () => last,
  map: () => map,
  mapTo: () => mapTo,
  materialize: () => materialize,
  max: () => max,
  merge: () => merge2,
  mergeAll: () => mergeAll,
  mergeMap: () => mergeMap,
  mergeMapTo: () => mergeMapTo,
  mergeScan: () => mergeScan,
  min: () => min,
  multicast: () => multicast,
  observeOn: () => observeOn,
  onErrorResumeNext: () => onErrorResumeNext2,
  pairwise: () => pairwise,
  partition: () => partition2,
  pluck: () => pluck,
  publish: () => publish,
  publishBehavior: () => publishBehavior,
  publishLast: () => publishLast,
  publishReplay: () => publishReplay,
  race: () => race2,
  reduce: () => reduce,
  refCount: () => refCount,
  repeat: () => repeat,
  repeatWhen: () => repeatWhen,
  retry: () => retry,
  retryWhen: () => retryWhen,
  sample: () => sample,
  sampleTime: () => sampleTime,
  scan: () => scan,
  sequenceEqual: () => sequenceEqual,
  share: () => share,
  shareReplay: () => shareReplay,
  single: () => single,
  skip: () => skip,
  skipLast: () => skipLast,
  skipUntil: () => skipUntil,
  skipWhile: () => skipWhile,
  startWith: () => startWith,
  subscribeOn: () => subscribeOn,
  switchAll: () => switchAll,
  switchMap: () => switchMap,
  switchMapTo: () => switchMapTo,
  take: () => take,
  takeLast: () => takeLast,
  takeUntil: () => takeUntil,
  takeWhile: () => takeWhile,
  tap: () => tap,
  throttle: () => throttle,
  throttleTime: () => throttleTime,
  throwIfEmpty: () => throwIfEmpty,
  timeInterval: () => timeInterval,
  timeout: () => timeout,
  timeoutWith: () => timeoutWith,
  timestamp: () => timestamp,
  toArray: () => toArray,
  window: () => window,
  windowCount: () => windowCount,
  windowTime: () => windowTime,
  windowToggle: () => windowToggle,
  windowWhen: () => windowWhen,
  withLatestFrom: () => withLatestFrom,
  zip: () => zip2,
  zipAll: () => zipAll
});
var init_operators = __esm({
  "node_modules/muse-js/node_modules/rxjs/_esm5/operators/index.js"() {
    init_audit();
    init_auditTime();
    init_buffer();
    init_bufferCount();
    init_bufferTime();
    init_bufferToggle();
    init_bufferWhen();
    init_catchError();
    init_combineAll();
    init_combineLatest2();
    init_concat2();
    init_concatAll();
    init_concatMap();
    init_concatMapTo();
    init_count();
    init_debounce();
    init_debounceTime();
    init_defaultIfEmpty();
    init_delay();
    init_delayWhen();
    init_dematerialize();
    init_distinct();
    init_distinctUntilChanged();
    init_distinctUntilKeyChanged();
    init_elementAt();
    init_endWith();
    init_every();
    init_exhaust();
    init_exhaustMap();
    init_expand();
    init_filter();
    init_finalize();
    init_find();
    init_findIndex();
    init_first();
    init_groupBy();
    init_ignoreElements();
    init_isEmpty();
    init_last();
    init_map();
    init_mapTo();
    init_materialize();
    init_max();
    init_merge2();
    init_mergeAll();
    init_mergeMap();
    init_mergeMapTo();
    init_mergeScan();
    init_min();
    init_multicast();
    init_observeOn();
    init_onErrorResumeNext2();
    init_pairwise();
    init_partition2();
    init_pluck();
    init_publish();
    init_publishBehavior();
    init_publishLast();
    init_publishReplay();
    init_race2();
    init_reduce();
    init_repeat();
    init_repeatWhen();
    init_retry();
    init_retryWhen();
    init_refCount();
    init_sample();
    init_sampleTime();
    init_scan();
    init_sequenceEqual();
    init_share();
    init_shareReplay();
    init_single();
    init_skip();
    init_skipLast();
    init_skipUntil();
    init_skipWhile();
    init_startWith();
    init_subscribeOn();
    init_switchAll();
    init_switchMap();
    init_switchMapTo();
    init_take();
    init_takeLast();
    init_takeUntil();
    init_takeWhile();
    init_tap();
    init_throttle();
    init_throttleTime();
    init_throwIfEmpty();
    init_timeInterval();
    init_timeout();
    init_timeoutWith();
    init_timestamp();
    init_toArray();
    init_window();
    init_windowCount();
    init_windowTime();
    init_windowToggle();
    init_windowWhen();
    init_withLatestFrom();
    init_zip2();
    init_zipAll();
  }
});

// node_modules/muse-js/dist/lib/muse-parse.js
var require_muse_parse = __commonJS({
  "node_modules/muse-js/dist/lib/muse-parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var operators_1 = (init_operators(), __toCommonJS(operators_exports));
    function parseControl(controlData) {
      return controlData.pipe(operators_1.concatMap(function(data) {
        return data.split("");
      }), operators_1.scan(function(acc, value) {
        if (acc.indexOf("}") >= 0) {
          return value;
        } else {
          return acc + value;
        }
      }, ""), operators_1.filter(function(value) {
        return value.indexOf("}") >= 0;
      }), operators_1.map(function(value) {
        return JSON.parse(value);
      }));
    }
    exports.parseControl = parseControl;
    function decodeUnsigned12BitData(samples) {
      var samples12Bit = [];
      for (var i = 0; i < samples.length; i++) {
        if (i % 3 === 0) {
          samples12Bit.push(samples[i] << 4 | samples[i + 1] >> 4);
        } else {
          samples12Bit.push((samples[i] & 15) << 8 | samples[i + 1]);
          i++;
        }
      }
      return samples12Bit;
    }
    exports.decodeUnsigned12BitData = decodeUnsigned12BitData;
    function decodeUnsigned24BitData(samples) {
      var samples24Bit = [];
      for (var i = 0; i < samples.length; i = i + 3) {
        samples24Bit.push(samples[i] << 16 | samples[i + 1] << 8 | samples[i + 2]);
      }
      return samples24Bit;
    }
    exports.decodeUnsigned24BitData = decodeUnsigned24BitData;
    function decodeEEGSamples(samples) {
      return decodeUnsigned12BitData(samples).map(function(n) {
        return 0.48828125 * (n - 2048);
      });
    }
    exports.decodeEEGSamples = decodeEEGSamples;
    function decodePPGSamples(samples) {
      return decodeUnsigned24BitData(samples);
    }
    exports.decodePPGSamples = decodePPGSamples;
    function parseTelemetry(data) {
      return {
        sequenceId: data.getUint16(0),
        batteryLevel: data.getUint16(2) / 512,
        fuelGaugeVoltage: data.getUint16(4) * 2.2,
        // Next 2 bytes are probably ADC millivolt level, not sure
        temperature: data.getUint16(8)
      };
    }
    exports.parseTelemetry = parseTelemetry;
    function parseImuReading(data, scale) {
      function sample2(startIndex) {
        return {
          x: scale * data.getInt16(startIndex),
          y: scale * data.getInt16(startIndex + 2),
          z: scale * data.getInt16(startIndex + 4)
        };
      }
      return {
        sequenceId: data.getUint16(0),
        samples: [sample2(2), sample2(8), sample2(14)]
      };
    }
    function parseAccelerometer(data) {
      return parseImuReading(data, 610352e-10);
    }
    exports.parseAccelerometer = parseAccelerometer;
    function parseGyroscope(data) {
      return parseImuReading(data, 74768e-7);
    }
    exports.parseGyroscope = parseGyroscope;
  }
});

// node_modules/muse-js/dist/lib/muse-utils.js
var require_muse_utils = __commonJS({
  "node_modules/muse-js/dist/lib/muse-utils.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve2) {
            resolve2(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var rxjs_1 = (init_esm5(), __toCommonJS(esm5_exports));
    var operators_1 = (init_operators(), __toCommonJS(operators_exports));
    function decodeResponse(bytes) {
      return new TextDecoder().decode(bytes.subarray(1, 1 + bytes[0]));
    }
    exports.decodeResponse = decodeResponse;
    function encodeCommand(cmd) {
      var encoded = new TextEncoder().encode("X" + cmd + "\n");
      encoded[0] = encoded.length - 1;
      return encoded;
    }
    exports.encodeCommand = encodeCommand;
    function observableCharacteristic(characteristic) {
      return __awaiter(this, void 0, void 0, function() {
        var disconnected;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, characteristic.startNotifications()];
            case 1:
              _a.sent();
              disconnected = rxjs_1.fromEvent(characteristic.service.device, "gattserverdisconnected");
              return [2, rxjs_1.fromEvent(characteristic, "characteristicvaluechanged").pipe(operators_1.takeUntil(disconnected), operators_1.map(function(event) {
                return event.target.value;
              }))];
          }
        });
      });
    }
    exports.observableCharacteristic = observableCharacteristic;
  }
});

// node_modules/muse-js/dist/lib/zip-samples.js
var require_zip_samples = __commonJS({
  "node_modules/muse-js/dist/lib/zip-samples.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var rxjs_1 = (init_esm5(), __toCommonJS(esm5_exports));
    var operators_1 = (init_operators(), __toCommonJS(operators_exports));
    var muse_1 = require_muse();
    function zipSamples(eegReadings) {
      var buffer2 = [];
      var lastTimestamp = null;
      return eegReadings.pipe(operators_1.mergeMap(function(reading) {
        if (reading.timestamp !== lastTimestamp) {
          lastTimestamp = reading.timestamp;
          if (buffer2.length) {
            var result = rxjs_1.from([buffer2.slice()]);
            buffer2.splice(0, buffer2.length, reading);
            return result;
          }
        }
        buffer2.push(reading);
        return rxjs_1.from([]);
      }), operators_1.concat(rxjs_1.from([buffer2])), operators_1.mergeMap(function(readings) {
        var result = readings[0].samples.map(function(x, index) {
          var data = [NaN, NaN, NaN, NaN, NaN];
          for (var _i = 0, readings_1 = readings; _i < readings_1.length; _i++) {
            var reading = readings_1[_i];
            data[reading.electrode] = reading.samples[index];
          }
          return {
            data,
            index: readings[0].index,
            timestamp: readings[0].timestamp + index * 1e3 / muse_1.EEG_FREQUENCY
          };
        });
        return rxjs_1.from(result);
      }));
    }
    exports.zipSamples = zipSamples;
  }
});

// node_modules/muse-js/dist/lib/zip-samplesPpg.js
var require_zip_samplesPpg = __commonJS({
  "node_modules/muse-js/dist/lib/zip-samplesPpg.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var rxjs_1 = (init_esm5(), __toCommonJS(esm5_exports));
    var operators_1 = (init_operators(), __toCommonJS(operators_exports));
    var muse_1 = require_muse();
    function zipSamplesPpg(ppgReadings) {
      var buffer2 = [];
      var lastTimestamp = null;
      return ppgReadings.pipe(operators_1.mergeMap(function(reading) {
        if (reading.timestamp !== lastTimestamp) {
          lastTimestamp = reading.timestamp;
          if (buffer2.length) {
            var result = rxjs_1.from([buffer2.slice()]);
            buffer2.splice(0, buffer2.length, reading);
            return result;
          }
        }
        buffer2.push(reading);
        return rxjs_1.from([]);
      }), operators_1.concat(rxjs_1.from([buffer2])), operators_1.mergeMap(function(readings) {
        var result = readings[0].samples.map(function(x, index) {
          var data = [NaN, NaN, NaN];
          for (var _i = 0, readings_1 = readings; _i < readings_1.length; _i++) {
            var reading = readings_1[_i];
            data[reading.ppgChannel] = reading.samples[index];
          }
          return {
            data,
            index: readings[0].index,
            timestamp: readings[0].timestamp + index * 1e3 / muse_1.PPG_FREQUENCY
          };
        });
        return rxjs_1.from(result);
      }));
    }
    exports.zipSamplesPpg = zipSamplesPpg;
  }
});

// node_modules/muse-js/dist/muse.js
var require_muse = __commonJS({
  "node_modules/muse-js/dist/muse.js"(exports) {
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve2) {
            resolve2(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var rxjs_1 = (init_esm5(), __toCommonJS(esm5_exports));
    var operators_1 = (init_operators(), __toCommonJS(operators_exports));
    var muse_parse_1 = require_muse_parse();
    var muse_utils_1 = require_muse_utils();
    var zip_samples_1 = require_zip_samples();
    exports.zipSamples = zip_samples_1.zipSamples;
    var zip_samplesPpg_1 = require_zip_samplesPpg();
    exports.zipSamplesPpg = zip_samplesPpg_1.zipSamplesPpg;
    exports.MUSE_SERVICE = 65165;
    var CONTROL_CHARACTERISTIC = "273e0001-4c4d-454d-96be-f03bac821358";
    var TELEMETRY_CHARACTERISTIC = "273e000b-4c4d-454d-96be-f03bac821358";
    var GYROSCOPE_CHARACTERISTIC = "273e0009-4c4d-454d-96be-f03bac821358";
    var ACCELEROMETER_CHARACTERISTIC = "273e000a-4c4d-454d-96be-f03bac821358";
    var PPG_CHARACTERISTICS = ["273e000f-4c4d-454d-96be-f03bac821358", "273e0010-4c4d-454d-96be-f03bac821358", "273e0011-4c4d-454d-96be-f03bac821358"];
    exports.PPG_FREQUENCY = 64;
    exports.PPG_SAMPLES_PER_READING = 6;
    var EEG_CHARACTERISTICS = ["273e0003-4c4d-454d-96be-f03bac821358", "273e0004-4c4d-454d-96be-f03bac821358", "273e0005-4c4d-454d-96be-f03bac821358", "273e0006-4c4d-454d-96be-f03bac821358", "273e0007-4c4d-454d-96be-f03bac821358"];
    exports.EEG_FREQUENCY = 256;
    exports.EEG_SAMPLES_PER_READING = 12;
    exports.ppgChannelNames = ["ambient", "infrared", "red"];
    exports.channelNames = ["TP9", "AF7", "AF8", "TP10", "AUX"];
    var MuseClient = (
      /** @class */
      function() {
        function MuseClient2() {
          this.enableAux = false;
          this.enablePpg = false;
          this.deviceName = "";
          this.connectionStatus = new rxjs_1.BehaviorSubject(false);
          this.gatt = null;
          this.lastIndex = null;
          this.lastTimestamp = null;
        }
        MuseClient2.prototype.connect = function(gatt) {
          return __awaiter(this, void 0, void 0, function() {
            var device, _a, service, _b, _c, telemetryCharacteristic, _d, gyroscopeCharacteristic, _e, accelerometerCharacteristic, _f, ppgObservables, ppgChannelCount, _loop_1, this_1, ppgChannelIndex, eegObservables, channelCount, _loop_2, this_2, channelIndex;
            var _this = this;
            return __generator(this, function(_g) {
              switch (_g.label) {
                case 0:
                  if (!gatt) return [3, 1];
                  this.gatt = gatt;
                  return [3, 4];
                case 1:
                  return [4, navigator.bluetooth.requestDevice({
                    filters: [{
                      services: [exports.MUSE_SERVICE]
                    }]
                  })];
                case 2:
                  device = _g.sent();
                  _a = this;
                  return [4, device.gatt.connect()];
                case 3:
                  _a.gatt = _g.sent();
                  _g.label = 4;
                case 4:
                  this.deviceName = this.gatt.device.name || null;
                  return [4, this.gatt.getPrimaryService(exports.MUSE_SERVICE)];
                case 5:
                  service = _g.sent();
                  rxjs_1.fromEvent(this.gatt.device, "gattserverdisconnected").pipe(operators_1.first()).subscribe(function() {
                    _this.gatt = null;
                    _this.connectionStatus.next(false);
                  });
                  _b = this;
                  return [4, service.getCharacteristic(CONTROL_CHARACTERISTIC)];
                case 6:
                  _b.controlChar = _g.sent();
                  _c = this;
                  return [4, muse_utils_1.observableCharacteristic(this.controlChar)];
                case 7:
                  _c.rawControlData = _g.sent().pipe(operators_1.map(function(data) {
                    return muse_utils_1.decodeResponse(new Uint8Array(data.buffer));
                  }), operators_1.share());
                  this.controlResponses = muse_parse_1.parseControl(this.rawControlData);
                  return [4, service.getCharacteristic(TELEMETRY_CHARACTERISTIC)];
                case 8:
                  telemetryCharacteristic = _g.sent();
                  _d = this;
                  return [4, muse_utils_1.observableCharacteristic(telemetryCharacteristic)];
                case 9:
                  _d.telemetryData = _g.sent().pipe(operators_1.map(muse_parse_1.parseTelemetry));
                  return [4, service.getCharacteristic(GYROSCOPE_CHARACTERISTIC)];
                case 10:
                  gyroscopeCharacteristic = _g.sent();
                  _e = this;
                  return [4, muse_utils_1.observableCharacteristic(gyroscopeCharacteristic)];
                case 11:
                  _e.gyroscopeData = _g.sent().pipe(operators_1.map(muse_parse_1.parseGyroscope));
                  return [4, service.getCharacteristic(ACCELEROMETER_CHARACTERISTIC)];
                case 12:
                  accelerometerCharacteristic = _g.sent();
                  _f = this;
                  return [4, muse_utils_1.observableCharacteristic(accelerometerCharacteristic)];
                case 13:
                  _f.accelerometerData = _g.sent().pipe(operators_1.map(muse_parse_1.parseAccelerometer));
                  this.eventMarkers = new rxjs_1.Subject();
                  if (!this.enablePpg) return [3, 18];
                  this.ppgCharacteristics = [];
                  ppgObservables = [];
                  ppgChannelCount = PPG_CHARACTERISTICS.length;
                  _loop_1 = function(ppgChannelIndex2) {
                    var characteristicId, ppgChar, _a2, _b2;
                    return __generator(this, function(_c2) {
                      switch (_c2.label) {
                        case 0:
                          characteristicId = PPG_CHARACTERISTICS[ppgChannelIndex2];
                          return [4, service.getCharacteristic(characteristicId)];
                        case 1:
                          ppgChar = _c2.sent();
                          _b2 = (_a2 = ppgObservables).push;
                          return [4, muse_utils_1.observableCharacteristic(ppgChar)];
                        case 2:
                          _b2.apply(_a2, [_c2.sent().pipe(operators_1.map(function(data) {
                            var eventIndex = data.getUint16(0);
                            return {
                              index: eventIndex,
                              ppgChannel: ppgChannelIndex2,
                              samples: muse_parse_1.decodePPGSamples(new Uint8Array(data.buffer).subarray(2)),
                              timestamp: _this.getTimestamp(eventIndex, exports.PPG_SAMPLES_PER_READING, exports.PPG_FREQUENCY)
                            };
                          }))]);
                          this_1.ppgCharacteristics.push(ppgChar);
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  };
                  this_1 = this;
                  ppgChannelIndex = 0;
                  _g.label = 14;
                case 14:
                  if (!(ppgChannelIndex < ppgChannelCount)) return [3, 17];
                  return [5, _loop_1(ppgChannelIndex)];
                case 15:
                  _g.sent();
                  _g.label = 16;
                case 16:
                  ppgChannelIndex++;
                  return [3, 14];
                case 17:
                  this.ppgReadings = rxjs_1.merge.apply(void 0, ppgObservables);
                  _g.label = 18;
                case 18:
                  this.eegCharacteristics = [];
                  eegObservables = [];
                  channelCount = this.enableAux ? EEG_CHARACTERISTICS.length : 4;
                  _loop_2 = function(channelIndex2) {
                    var characteristicId, eegChar, _a2, _b2;
                    return __generator(this, function(_c2) {
                      switch (_c2.label) {
                        case 0:
                          characteristicId = EEG_CHARACTERISTICS[channelIndex2];
                          return [4, service.getCharacteristic(characteristicId)];
                        case 1:
                          eegChar = _c2.sent();
                          _b2 = (_a2 = eegObservables).push;
                          return [4, muse_utils_1.observableCharacteristic(eegChar)];
                        case 2:
                          _b2.apply(_a2, [_c2.sent().pipe(operators_1.map(function(data) {
                            var eventIndex = data.getUint16(0);
                            return {
                              electrode: channelIndex2,
                              index: eventIndex,
                              samples: muse_parse_1.decodeEEGSamples(new Uint8Array(data.buffer).subarray(2)),
                              timestamp: _this.getTimestamp(eventIndex, exports.EEG_SAMPLES_PER_READING, exports.EEG_FREQUENCY)
                            };
                          }))]);
                          this_2.eegCharacteristics.push(eegChar);
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  };
                  this_2 = this;
                  channelIndex = 0;
                  _g.label = 19;
                case 19:
                  if (!(channelIndex < channelCount)) return [3, 22];
                  return [5, _loop_2(channelIndex)];
                case 20:
                  _g.sent();
                  _g.label = 21;
                case 21:
                  channelIndex++;
                  return [3, 19];
                case 22:
                  this.eegReadings = rxjs_1.merge.apply(void 0, eegObservables);
                  this.connectionStatus.next(true);
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        MuseClient2.prototype.sendCommand = function(cmd) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.controlChar.writeValue(muse_utils_1.encodeCommand(cmd))];
                case 1:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        MuseClient2.prototype.start = function() {
          return __awaiter(this, void 0, void 0, function() {
            var preset;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.pause()];
                case 1:
                  _a.sent();
                  preset = "p21";
                  if (this.enablePpg) {
                    preset = "p50";
                  } else if (this.enableAux) {
                    preset = "p20";
                  }
                  return [4, this.controlChar.writeValue(muse_utils_1.encodeCommand(preset))];
                case 2:
                  _a.sent();
                  return [4, this.controlChar.writeValue(muse_utils_1.encodeCommand("s"))];
                case 3:
                  _a.sent();
                  return [4, this.resume()];
                case 4:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        MuseClient2.prototype.pause = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.sendCommand("h")];
                case 1:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        MuseClient2.prototype.resume = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.sendCommand("d")];
                case 1:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        MuseClient2.prototype.deviceInfo = function() {
          return __awaiter(this, void 0, void 0, function() {
            var resultListener;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  resultListener = this.controlResponses.pipe(operators_1.filter(function(r) {
                    return !!r.fw;
                  }), operators_1.take(1)).toPromise();
                  return [4, this.sendCommand("v1")];
                case 1:
                  _a.sent();
                  return [2, resultListener];
              }
            });
          });
        };
        MuseClient2.prototype.injectMarker = function(value, timestamp2) {
          if (timestamp2 === void 0) {
            timestamp2 = (/* @__PURE__ */ new Date()).getTime();
          }
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.eventMarkers.next({
                    value,
                    timestamp: timestamp2
                  })];
                case 1:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        MuseClient2.prototype.disconnect = function() {
          if (this.gatt) {
            this.lastIndex = null;
            this.lastTimestamp = null;
            this.gatt.disconnect();
            this.connectionStatus.next(false);
          }
        };
        MuseClient2.prototype.getTimestamp = function(eventIndex, samplesPerReading, frequency) {
          var READING_DELTA = 1e3 * (1 / frequency) * samplesPerReading;
          if (this.lastIndex === null || this.lastTimestamp === null) {
            this.lastIndex = eventIndex;
            this.lastTimestamp = (/* @__PURE__ */ new Date()).getTime() - READING_DELTA;
          }
          while (this.lastIndex - eventIndex > 4096) {
            eventIndex += 65536;
          }
          if (eventIndex === this.lastIndex) {
            return this.lastTimestamp;
          }
          if (eventIndex > this.lastIndex) {
            this.lastTimestamp += READING_DELTA * (eventIndex - this.lastIndex);
            this.lastIndex = eventIndex;
            return this.lastTimestamp;
          } else {
            return this.lastTimestamp - READING_DELTA * (this.lastIndex - eventIndex);
          }
        };
        return MuseClient2;
      }()
    );
    exports.MuseClient = MuseClient;
  }
});
export default require_muse();
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=muse-js.js.map
